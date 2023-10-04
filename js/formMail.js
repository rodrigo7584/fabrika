// //seleciona todas tabs
// const tabs = document.querySelectorAll('.event-form .tab')
// // Seta a primeira tab
// let currentTab = 0
// // Mostra a primeira tab
// showTab(currentTab)
// //genero da festa
// let gender = ''

// //controle dos botoes do formulario
// tabs.forEach(tab => {
//   //busca cada grupo de botoes que aceita ser selecionado um so em cada tab
//   const uniqueButtons = tab.querySelectorAll('.btn-unique')
//   uniqueButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       uniqueButtons.forEach(buttons => {
//         buttons.classList.remove('selected')
//         button.classList.add('selected')
//       })
//       controlIfIsEmpty('btn', currentTab, button)
//     })
//   })

//   //busca grupo de botoes aceita ser selecionado varios cada tab
//   const multipleButtons = tab.querySelectorAll('.btn-multiple')
//   multipleButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       if (button.classList.contains('selected')) {
//         button.classList.remove('selected')
//       } else {
//         button.classList.add('selected')
//       }
//     })
//   })
// })

// function showTab(n) {
//   //mostra a tab de numero que veio no parametro
//   tabs[n].style.display = 'block'
//   console.log(n)
//   //se for a primeira tab não mostra o btn-prev pq não tem tab anterior ne
//   if (n == 0) {
//     document.querySelector('.btn-prev').style.display = 'none'
//   } else {
//     document.querySelector('.btn-prev').style.display = 'flex'
//   }

//   //o inverso se for a ultima tav não mostra o next e muda o conteudo do next para submit
//   if (n == tabs.length - 1) {
//     // document.querySelector('.btn-next').innerHTML = 'Enviar'
//     document.querySelector('.btn-next').style.display = 'none'
//   } else {
//     //document.querySelector('.btn-next').innerHTML = 'Avançar'
//     document.querySelector('.btn-next').style.display = 'flex'
//   }
// }
// function controlIfIsEmpty(type, currentTab, button) {
//   if (type == 'btn') {
//     console.log('é botao')
//   }
// }

// function nextPrev(n) {
//   // esconde a tab atual para mostrar a proxima
//   tabs[currentTab].style.display = 'none'

//   // aumenta um numero na proxima tab ou diminui depende o parametro
//   currentTab = currentTab + n

//   // se tiver na ultima tab e clicar no botao submit ele envia o form
//   if (currentTab >= tabs.length) {
//     // enviar()
//     initConstructEmail()
//     return false
//   }
//   // senão mostra a proxima tab
//   showTab(currentTab)
// }

// function initConstructEmail() {
//   const eventForm = document.querySelector('.event-form')
//   if (eventForm.length) {
//     tabs.forEach(tab => {
//       const buttonSelected = tab.querySelectorAll('.btn.selected')
//       const inputs = tab.querySelectorAll('input')
//       buttonSelected.forEach(button => {
//         console.log(button.innerHTML)
//       })
//       inputs.forEach(inpu => {
//         console.log(inpu.value)
//       })
//     })
//   }
// }

// function enviar() {
//   fetch('https://formsubmit.co/ajax/rodrigo.gandhi.oliveira@gmail.com', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify({
//       subject: 'teste',
//       name: 'FormSubmit',
//       message: "I'm from Devro LABS"
//     })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

const tabs = document.querySelectorAll('.event-form .tab')
const tabChooseGender = document.querySelector('#tab-gender')
const tabNumberOfGuests = document.querySelector('#tab-guests')
const tabGenderFemale = document.querySelector('#tab-gender-female')
const tabGenderMale = document.querySelector('#tab-gender-male')
const tabWhere = document.querySelector('#tab-where')
const tabTheme = document.querySelector('#tab-theme')
const tabMoreOptions = document.querySelector('#tab-more-options')
const tabFinish = document.querySelector('#tab-finish')

const btnNextTabChooseGender = document.querySelector('.btn-next-tab-gender')
const btnNextNumberOfGuests = document.querySelector('.btn-next-tab-guests')
const btnNextGenderFemale = document.querySelector('.btn-next-tab-gender-female')
const btnNextGenderMale = document.querySelector('.btn-next-tab-gender-male')
const btnNextWhere = document.querySelector('.btn-next-tab-where')
const btnNextTheme = document.querySelector('.btn-next-tab-theme')
const btnNextMoreOptions = document.querySelector('.btn-next-more-options')

const btnPrevNumberOfGuests = document.querySelector('.btn-prev-tab-guests')
const btnPrevGenderFemale = document.querySelector('.btn-prev-tab-gender-female')
const btnPrevGenderMale = document.querySelector('.btn-prev-tab-gender-male')
const btnPrevWhere = document.querySelector('.btn-prev-tab-where')
const btnPrevTheme = document.querySelector('.btn-prev-tab-theme')
const btnPrevMoreOptions = document.querySelector('.btn-prev-more-options')
const btnPrevFinish = document.querySelector('.btn-prev-finish')

let currentTab = tabChooseGender
let genderChosen = ''

tabChooseGender.style.display = 'grid'

const btnsTabChooseGender = tabChooseGender.querySelectorAll('.btn-unique')

btnsTabChooseGender.forEach(btn => {
  btn.addEventListener('click', () => {
    genderChosen = btn.innerHTML
    btnNextTabChooseGender.style.display = 'flex'
  })
})

btnNextTabChooseGender.addEventListener('click', () => {
  tabChooseGender.style.display = 'none'
  tabNumberOfGuests.style.display = 'grid'
})

btnPrevNumberOfGuests.addEventListener('click', () => {
  tabChooseGender.style.display = 'grid'
  tabNumberOfGuests.style.display = 'none'
})

const btnsNumberOfGuests = tabNumberOfGuests.querySelectorAll('.btn-unique')

btnsNumberOfGuests.forEach(btn => {
  btn.addEventListener('click', () => {
    btnNextNumberOfGuests.style.display = 'flex'
  })
})

btnNextNumberOfGuests.addEventListener('click', () => {
  tabNumberOfGuests.style.display = 'none'
  if (genderChosen == 'Menina') {
    tabGenderFemale.style.display = 'grid'
  } else {
    tabGenderMale.style.display = 'grid'
  }
})

const btnsGenderFemale = tabGenderFemale.querySelectorAll('.btn-unique')

btnsGenderFemale.forEach(btn => {
  btn.addEventListener('click', () => {
    btnNextGenderFemale.style.display = 'flex'
  })
})

btnPrevGenderFemale.addEventListener('click', () => {
  tabGenderFemale.style.display = 'none'
  tabNumberOfGuests.style.display = 'grid'
})

const btnsGenderMale = tabGenderMale.querySelectorAll('.btn-unique')

btnsGenderMale.forEach(btn => {
  btn.addEventListener('click', () => {
    btnNextGenderMale.style.display = 'flex'
  })
})

btnPrevGenderMale.addEventListener('click', () => {
  tabNumberOfGuests.style.display = 'grid'
  tabGenderMale.style.display = 'none'
  console.log('tetse')
})

tabs.forEach(tab => {
  const uniqueButtons = tab.querySelectorAll('.btn-unique')
  uniqueButtons.forEach(button => {
    button.addEventListener('click', () => {
      uniqueButtons.forEach(buttons => {
        buttons.classList.remove('selected')
        button.classList.add('selected')
      })
    })
  })
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
