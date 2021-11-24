## Responsive Image Wordpress Plugin

**Responsive Image** is a simple plugin to quickly add the option for mobile images. If the Javascript detects the data-back attribute it chooses which image to display based on the breakpoint (min-width: 992).

## Usage

`<img data-back="https://mysite.com/image-mobile.jpg|https://mysite.com/image-desktop.jpg">`

If the attribute is applied to an element other than <img>, then the image will be set as a background image.

The plugin also creates a Gutenberg block called Responsive Image which accepts a mobile and desktop image. The block was built using this toolkit https://github.com/ahmadawais/create-guten-block. The block will be available in your block editor after you install the plugin.
