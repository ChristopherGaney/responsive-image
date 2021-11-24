/**
 * BLOCK: Responsive Image
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, RadioControl } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';


registerBlockType('cgb/responsive-image', {   
  title: 'Responsive Image',
  icon: 'saved',
  category: 'common',
  attributes: {
    selection: {
      type: 'string',
      default: 'img',
      attribute: 'val',
      selector: '.responsive_image'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.responsive_image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.responsive_image'
    },
    mobileImgUrl: {
      attribute: 'msrc',
      selector: '.responsive_image'
    }
  },
  edit({ attributes, className, setAttributes }) {
    const onRemoveMobileImage = () => {
            setAttributes( {
                mobileImgUrl: undefined,
            } );
        };
    const onRemoveImage = () => {
            setAttributes( {
                imageUrl: undefined,
            } );
        };
    const getMobileImageButton = (openEvent) => {
      if(attributes.mobileImgUrl) {
        return (
          <div className="enclosure">
            <img 
              src={ attributes.mobileImgUrl }
              onClick={ openEvent }
              className="image"
            />
            <Button onClick={ onRemoveMobileImage } isLink isDestructive>
                { __( 'Remove background image', 'image-selector-example' ) }
            </Button>
          </div>
        );
      }
      else {
        return (
          <div className="button-container">
            <Button 
              onClick={ openEvent }
              className="button button-large"
            >
              Mobile Img
            </Button>
          </div>
        );
      }
    };
    const getImageButton = (openEvent) => {
      if(attributes.imageUrl) {
        return (
          <div className="image_wrapper">
            <img 
              src={ attributes.imageUrl }
              onClick={ openEvent }
              className="image"
            />
            <Button onClick={ onRemoveImage } isLink isDestructive>
                { __( 'Remove background image', 'image-selector-example' ) }
            </Button>
          </div>
        );
      }
      else {
        return (
          <div className="button-container">
            <Button 
              onClick={ openEvent }
              className="button button-large"
            >
              Desktop Img
            </Button>
          </div>
        );
      }
    };

    return (
      <div className={ className }>
        <p>{ __( 'Use a mobile and desktop image or just desktop.', 'image-selector-example' ) }</p>
        <RadioControl
            label="Choose:"
            help="If div, the image will be set as background"
            selected={ attributes.selection || 'img' }
            className="element_choice"
            options={ [
                { label: 'image', value: 'img' },
                { label: 'div', value: 'div' },
            ] }
            onChange={ (newSel) => setAttributes({ selection: newSel })}
            
        />
        <p>{ attributes.radiosel }</p>
        <div className="media_wrapper">
          <MediaUpload
            title="Mobile Image"
            onSelect={ media => { setAttributes({ imageAlt: media.alt, mobileImgUrl: media.url }); } }
            type="image"
            value={ attributes.imageID }
            render={ ({ open }) => getMobileImageButton(open) }
          />
          <MediaUpload
            title="Desktop Image"
            onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
            type="image"
            value={ attributes.imageID }
            render={ ({ open }) => getImageButton(open) }
          />
        </div>
      </div>
    );

  },

  save({ attributes }) {

    const responsiveImage = (msrc, src, alt, val) => {
      if(msrc && !src) {
        src = msrc;
        msrc = undefined;
      }
      if(msrc) {
        const urls = msrc + '|' + src;
        if(val == 'img') {
          if(alt) {
            return (
              <img 
                data-back={ urls }
                className="responsive_image" 
                src=""
                alt={ alt }
              /> 
            );
          }
          return (
            <img
              data-back={ urls }
              className="responsive_image" 
              src=""
              alt=""
              aria-hidden="true"
            /> 
          );
        }
        else {
          return (
            <div 
              data-back={ urls }
              className="responsive_image" 
            /> 
          );
        }
      }
      else {
        if(val == 'img') {
          if(alt) {
            return (
              <img 
                className="responsive_image" 
                src={ src }
                alt={ alt }
              /> 
            );
          }
          return (
            <img
              className="responsive_image" 
              src={ src }
              alt=""
              aria-hidden="true"
            /> 
          );
        }
        else {
          const str = "background: url(" + src + "})";
          return (
            <div 
              style={ str }
              className="responsive_image" 
            /> 
          );
        }
      }
      
    };
    
    return (
      <div className="responsive_image_block">
        { responsiveImage(attributes.mobileImgUrl, attributes.imageUrl, 
          attributes.imageAlt, attributes.selection) }
      </div>
    );
  }
});