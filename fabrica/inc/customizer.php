<?php

function fabrica_ludica_customizer($wp_customize){
      $wp_customize->add_panel( 'pg_home', array(
        'priority'       => 10,
        'title'          => 'Página Home',
        'description'    => 'Opções página home',
      ) );

      $wp_customize->add_section(
        'sec_garantia',
        array(
          'title' => 'Primeira Sessão',
          'description' => 'Configurações da sessão',
          'panel' => 'pg_home'
        )
      );
      $wp_customize->add_setting(
        'set_garantia_title',
        array(
          'type' => 'theme_mod',
          'default' => '',
          'sanitize_callback' => 'sanitize_text_field'
        )
      ); 
      $wp_customize->add_control(
        'set_garantia_title',
        array(
          'label' => 'Título',
          'description' => 'Digite um título para a sessão.',
          'section' => 'sec_garantia',
          'type' => 'text'
        )
      ); 
      $wp_customize->add_setting(
        'set_garantia_text',
        array(
          'type' => 'theme_mod',
          'default' => '',
          'sanitize_callback' => 'sanitize_text_field'
        )
      ); 
      $wp_customize->add_control(
        'set_garantia_text',
        array(
          'label' => 'Texto',
          'description' => 'Digite um texto para a sessão.',
          'section' => 'sec_garantia',
          'type' => 'textarea'
        )
      ); 
      $wp_customize->add_setting(
        'set_garantia_btn',
        array(
          'type' => 'theme_mod',
          'default' => 'true',
          
        )
      ); 
      $wp_customize->add_control(
        'set_garantia_btn',
        array(
          'label' => 'Mostrar botão?',
          'section' => 'sec_garantia',
          'type' => 'checkbox'
        )
      ); 
}
add_action('customize_register', 'fabrica_ludica_customizer');