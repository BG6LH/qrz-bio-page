## QRZ.com Bio Page Investigation

This project is designed to investigate the ​web compatibility of QRZ.com's biography page, exploring the feasibility of a hybrid technology stack (HTML5/CSS3 vs legacy HTML4/CSS2) in QRZ.com scenarios.

Selected code snippets have been isolated for use as GAI prompts.

my qrz biography page is [here](https://www.qrz.com/db/BG6LH#t_bio).


> **Important Notice:** You may reference this project's content at your own risk. No warranty is provided regarding the integrity of your QRZ.com data or published information.


## QRZ Biography Page Fundamentals

QRZ.com provides a customizable biography page embedded within an iframe. Users cannot modify the iframe's inner HTML Document's basic structure, but can insert custom HTML snippets within the <body> sectiob and add custom CSS styles in the <head> section. All customizations must comply with the following rules.

For more information please refer to [QRZ-Biography-Page-Fundamentals.md](QRZ-Biography-Page-Fundamentals.md)

## Code Sinppets of this projects

- **[bio.iframe.html](bio.iframe.html)**, The iframe part of the QRZ user's page. the JavaScript codes are using to inject user's custom HTML and CSS snippets.
- **[bio.html](bio.html)**, user's HTML snippets.
- **[bio.css](bio.css)**, user's CSS style sheet snippets.

## Preliminary Summary of Bio Page's Compatibility

Quoted from GAI's analysis, the compatibility rules for the QRZ bio embedded page can be summarized as follows:  

- **Document Type & Formatting:**  
  - The embedded page is strictly XHTML 1.0 Strict.  
  - Custom content must comply with XHTML syntax rules (properly closed tags, quoted attributes, etc.).  

- **Viewport & Responsiveness:**  
  - The embedded page itself does not define a viewport meta tag; the viewport settings are controlled by the parent QRZ page.  
  - Custom content should be designed to adapt to the iframe’s dimensions and external responsive rules.  

- **Content Insertion:**  
  - Custom HTML must be injected into predefined containers (such as the `biodata` div) without disrupting the existing DOM structure.  
  - Scripts and inline event handlers are not allowed as per QRZ’s content policy.  

- **Image & Link Handling:**  
  - Images should use lazy loading attributes (`data-loading="lazy"` and `data-src`) to align with the existing lazy loading mechanism.  
  - Links are automatically assigned a `target="_top"` attribute to ensure they open in the top-level window.  

- **Browser Compatibility:**  
  - The embedded page is generated dynamically using JavaScript and jQuery, ensuring proper rendering across major browsers.  
  - Firefox-specific scroll adjustments are implemented to maintain consistent navigation behavior.  

When designing iframe-based bio content, ensure that all HTML is **XHTML 1.0 Strict compliant**, script-free, and inserted within the designated `biodata` container. Additionally, leverage the existing lazy loading and link-handling mechanisms to maintain compatibility with the QRZ bio page structure.
