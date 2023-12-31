<footer class="transition-before transition-blue">
      <div class="container">
        <div class="row row-info">
          <div class="logo">
            <a href="<?php echo home_url('/');?>">
              <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="">
            </a>
            <h4 class="highlight-text">Criamos momentos únicos de alegria e lazer</h4>
          </div>
          <nav>
            <ul>
              <li class="title">Início</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Pacotes</a></li>
              <li><a href="#">Planeje seu evento</a></li>
            </ul>
            <ul>
              <li class="title">Sobre nós</li>
              <li><a href="./about.php">Quem somos</a></li>
              <li><a href="#">Recreação infantil</a></li>
              <li><a href="#">Serviços</a></li>
            </ul>
            <ul>
              <li class="title">Suporte</li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
          <div class="contact-box">
            <div class="social">
              <a href="#" target="_blank">
                <img src="<?php echo get_template_directory_uri(); ?>/img/icon-facebook.png" alt="" />
              </a>
              <a href="#" target="_blank">
                <img src="<?php echo get_template_directory_uri(); ?>/img/icon-instagram.png" alt="" />
              </a>
              <a href="#" target="_blank">
                <img src="<?php echo get_template_directory_uri(); ?>/img/icon-tiktok.png" alt="" />
              </a>
            </div>
            <a href="#" class="btn btn-orange">Contato</a>
          </div>
        </div>
        <div class="row row-copyright">
          <p>@2023 Fabrica Lúdica. Todos os direitos reservados</p>
          <ul>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Opt in</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <?php wp_footer(); ?>
  </body>
</html>
