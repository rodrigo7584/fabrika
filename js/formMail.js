function initFormEvent() {
  const eventForm = document.querySelector('.event-form')
  if (eventForm.length) {
    //seleciona todas tabs
    const tabs = eventForm.querySelectorAll('.tab')
    tabs.forEach(tab => {
      //busca cada grupo de botoes que aceita ser selecionado um so em cada tab
      const uniqueButtons = tab.querySelectorAll('.btn-unique')
      uniqueButtons.forEach(button => {
        button.addEventListener('click', () => {
          uniqueButtons.forEach(buttons => {
            buttons.classList.remove('selected')
            button.classList.add('selected')
          })
        })
      })
      //busca grupo de botoes aceita ser selecionado varios cada tab
      const multipleButtons = tab.querySelectorAll('.btn-multiple')
      multipleButtons.forEach(button => {
        button.addEventListener('click', () => {
          if (button.classList.contains('selected')) {
            button.classList.remove('selected')
          } else {
            button.classList.add('selected')
          }
        })
      })
    })
    //mostra as tabs
  }
}
initFormEvent()

let currentTab = 0 // Seta a primeira tab
showTab(currentTab) // Mostra a primeira tab

function showTab(n) {
  // Esta função mostra a tab em tela
  const tabs = document.querySelectorAll('.tab')

  //mostra a tab de numero que veio no parametro
  tabs[n].style.display = 'block'

  //se for a primeira tab não mostra o btn-prev pq não tem tab anterior ne
  if (n == 0) {
    document.querySelector('.btn-prev').style.display = 'none'
  } else {
    document.querySelector('.btn-prev').style.display = 'flex'
  }

  //o inverso se for a ultima tav não mostra o next e muda o conteudo do next para submit
  if (n == tabs.length - 1) {
    // document.querySelector('.btn-next').innerHTML = 'Enviar'
    document.querySelector('.btn-next').style.display = 'none'
  } else {
    //document.querySelector('.btn-next').innerHTML = 'Avançar'
    document.querySelector('.btn-next').style.display = 'flex'
  }
}

function nextPrev(n) {
  // verifica qual tab vai mostrar
  const tabs = document.querySelectorAll('.tab')

  // esconde a tab atual para mostrar a proxima
  tabs[currentTab].style.display = 'none'

  // aumenta um numero na proxima tab ou diminui depende o parametro
  currentTab = currentTab + n

  // se tiver na ultima tab e clicar no botao submit ele envia o form
  if (currentTab >= tabs.length) {
    // enviar()
    initConstructEmail()
    return false
  }
  // senão mostra a proxima tab
  showTab(currentTab)
}

function initConstructEmail() {
  const eventForm = document.querySelector('.event-form')
  if (eventForm.length) {
    const tabs = eventForm.querySelectorAll('.tab')
    tabs.forEach(tab => {
      const buttonSelected = tab.querySelectorAll('.btn.selected')
      const inputs = tab.querySelectorAll('input')
      buttonSelected.forEach(button => {
        console.log(button.innerHTML)
      })
      inputs.forEach(inpu => {
        console.log(inpu.value)
      })
    })
  }
}
initConstructEmail()

function enviar() {
  fetch('https://formsubmit.co/ajax/rodrigo.gandhi.oliveira@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      subject: 'teste',
      name: 'FormSubmit',
      message: "I'm from Devro LABS"
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
