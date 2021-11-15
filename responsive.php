<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function responsive_image_enqueue() {
      wp_register_script('responsive-image', plugin_dir_url( __FILE__ ) . 'responsive/js/responsive-image.min.js', array('jquery'), '1.0.1', true);
      wp_enqueue_script('responsive-image');
  }
  add_action('wp_enqueue_scripts', 'responsive_image_enqueue');