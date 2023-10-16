<?php
/*
Template Name: Pagina Quem Somos
Description: Template da pagina quem somos
*/
get_header();?>
  <main>
    <section class="hero-about">
      <div class="container">
        <div class="row">
          <div class="content">
            <h1 class="title-primary">Conheça mais sobre nosso trabalho no mundo infantil</h1>
            <p class="subtitle">
              Tenha um atendimento 100% personalizado, com uma equipe especializada em recreação
              infantil
            </p>
            <a href="#" class="btn btn-orange">
              <img src="<?php echo get_template_directory_uri(); ?>/img/icon-whatsapp.png" alt="" />
              Entre em contato
            </a>
          </div>
          <div class="image">
            <img src="<?php echo get_template_directory_uri(); ?>/img/illustration-kids.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="sobre-nos">
      <div class="container">
        <div class="row">
          <div class="image">
            <img src="<?php echo get_template_directory_uri(); ?>/img/group-2.png" alt="" />
          </div>
          <div class="content">
            <h2 class="title-bar">Sobre nós</h2>
            <p class="text-bold">
              Contamos com mais de 18 anos de experiência no mercado, trabalhando com recreação
              infantil, com uma visão diferenciada e inovadora, buscando levar alegria, lazer e
              satisfação aos nossos clientes.
            </p>
            <br />
            <p class="text-bold">
              Trabalhamos com todos os tipos de festas e eventos infantis - desde o aniversário
              infantil, festas familiares como batizados, casamentos ou churrascos, eventos
              corporativos para o público infantil até a recreação infantil em clubes, hotéis e
              escolas.
            </p>
            <br />
            <p class="text-bold">
              Nossa equipe é composta por profissionais da área de educação física, pedagogia,
              turismo e teatro.
            </p>
            <br />
            <p class="text-bold">
              Frequentemente, promovemos cursos e workshops para nossos profissionais para trazer
              novas tendências e garantir muita diversão em nossos atendimentos.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mvv">
      <img src="<?php echo get_template_directory_uri(); ?>/img/ballon.png" alt="" class="image-ballon" />
      <div class="container">
        <div class="row">
          <div class="boxes">
            <div class="box">
              <h2 class="title-box">Nossa Missão</h2>
              <p class="text-bold">
              Criamos momentos únicos de alegria e lazer para o nosso público, propondo
              jogos e brincadeiras de forma divertida, para que cada um possa fazer parte
              desta experiência inesquecível.
              </p>
            </div>
            <div class="box">
              <h2 class="title-box">Nossa Visão</h2>
              <p class="text-bold">
              Ser uma referência na área de recreação infantil e eventos para crianças e
              adolescentes, reconhecida pela inovação na criação de serviços e produtos,
              atendimento personalizado e resgate da interação e desenvolvimento pessoal
              através do brincar.
              </p>
            </div>
            <div class="box">
              <h2 class="title-box">Nossos Valores</h2>
              <ul class="red-list">
                <li>Respeito</li>
                <li>Diversidade</li>
                <li>Paixão</li>
                <li>Qualidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src="<?php echo get_template_directory_uri(); ?>/img/plane.png" alt="" class="image-plane" />
    </section>
    <section class="numeros">
      <div class="container">
        <div class="row">
          <h2 class="title-primary">A Fabrica em números</h2>
          <h3 class="subtitle">Aproveite nossa experiência na área de recreação infantil</h3>
          <div class="boxes">
            <div class="box">
              <span>+7500</span>
              <p>Eventos infantis realizados</p>
            </div>
            <div class="box">
              <span>+14</span>
              <p>Clubes, hotéis e empresas atentidas</p>
            </div>
            <div class="box">
              <span>+1,2 Mil</span>
              <p>Crianças felizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
<?php get_footer();?>