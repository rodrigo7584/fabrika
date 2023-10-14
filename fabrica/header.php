<!DOCTYPE html>
<html <?php language_attributes();?>>
  <head>  
    
    <meta charset="<?php bloginfo('charset');?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- <link rel="icon" type="image/png" href="./img/favicon-32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="./img/favicon-16.png" sizes="16x16" /> -->

    <?php wp_head();?>
  </head>
  <body <?php body_class();?>>
    <header class="menu">
      <div class="container">
        <div class="row">
          <a href="./index.php" class="logo">
            <img src="./img/logo.png" alt="logo of this site" />
          </a>
          <nav>
            <button class="btn-mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul>
              <li>
                <a href="./index.php">Home</a>
              </li>
              <li>
                <a href="./about.php">Quem Somos</a>
              </li>
              <li>
                <a href="#">Recreação infantil</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Pacotes</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#" class="btn btn-orange">Planeje seu evento </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>