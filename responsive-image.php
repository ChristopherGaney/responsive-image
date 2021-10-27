<?php

/*
Plugin Name: responsive-image
Description: Javascript plugin to choose between small and large image when two images are supplied in data-back="" attribute.
Version: 1.0.0
Author: Christopher Ganey
Author URI: https://github.com/ChristopherGaney
License: GPL2
*/

function responsive_image_enqueue() {
      wp_register_script('responsive-image', plugin_dir_url( __FILE__ ) . 'dist/js/responsive-image.js', array('jquery'), '1.0.0', true);
      wp_enqueue_script('responsive-image');
  }
  add_action('wp_enqueue_scripts', 'responsive_image_enqueue');