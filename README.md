## Responsive Image Wordpress Plugin

**Responsive Image** is a simple plugin to quickly add the option for mobile images. If the Javascript detects the data-back attribute it chooses which image to display based on the breakpoint (min-width: 992).

## Usage

    <img data-back="https://mysite.com/image-mobile.jpg|https://mysite.com/image-desktop.jpg">

If the attribure is applied to an element other than <img>, then the image will be set as a background image.

## Contributing

This plugin could definitely be built out in many ways. It could be made to support multiple breakpoints that are passed in through the data attribute and the data attibute could be added to a Gutenberg block.