<?php

function fabrica_ludica_load_scripts(){
  wp_enqueue_style('fabrica-ludica-style',get_stylesheet_uri(), array(),filemtime(get_template_directory(). '/style.css'),'all');
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap', array(), null);
  wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css', array(), null);

  wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js', array(), '1.0', true);
  wp_enqueue_script('fabrica-ludica-main-js', get_template_directory_uri() . './js/script.js', array(), '1.0', true);
  wp_enqueue_script('fabrica-ludica-form-mail', get_template_directory_uri() . './js/formMail.js', array(), '1.0', true);

}
add_action('wp_enqueue_scripts','fabrica_ludica_load_scripts');