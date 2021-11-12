<?php
/**
Plugin Name: responsive-image
Description: Javascript plugin to choose between small and large image when two images are supplied in data-back="" attribute.
Version: 1.0.0
Author: Christopher Ganey
Author URI: https://github.com/ChristopherGaney
License: GPL2
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */

require_once plugin_dir_path( __FILE__ ) . 'responsive.php';
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
