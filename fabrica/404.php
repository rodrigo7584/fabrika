<?php get_header();?>
  <main>
    <?php 
      if(have_posts()):
        while(have_posts()): the_post();
    ?>
      <h1><?php the_title();?></h1>
    <?php
        endwhile;   else:
    ?>
      <p>Nada aqui por enquanto.</p>
    <?php
      endif;
    ?>
  </main>
<?php get_footer();?>