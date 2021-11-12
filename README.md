## Responsive Image Wordpress Plugin

**Responsive Image** is a simple plugin to quickly add the option for mobile images. If the Javascript detects the data-back attribute it chooses which image to display based on the breakpoint (min-width: 992).

## Usage

`<img data-back="https://mysite.com/image-mobile.jpg|https://mysite.com/image-desktop.jpg">`

(not implemented yet) If the attribute is applied to an element other than <img>, then the image will be set as a background image.

## Contributing

The plugin now creates a Gutenberg block called responsiveBlock which accepts a mobile and desktop image.