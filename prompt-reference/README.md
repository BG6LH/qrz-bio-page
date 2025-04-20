Files in this folder are using for Generative AI's prompt engineering, detecting the ​compatibility of QRZ.com's biography page, exploring the possibility of using morden front-end technology (HTML5/CSS3 vs legacy HTML4/CSS2) in QRZ.com scenarios.

## QRZ Biography Page Fundamentals

QRZ.com provides a customizable biography page embedded within an iframe. Users can inject his custom snippets into this iframe's inner html document, the HTML, within the <body> section and custom CSS styles sheet within the <head> section. All customizations are limied by the iframe's sandbox policy, and, must comply with the following rules.

For more information please refer to [QRZ-Biography-Page-Fundamentals.md](QRZ-Biography-Page-Fundamentals.md)

## Bio Iframe Snippet
I extract the bio iframe and it's inject JavaScript from QRZ's bio page: 

- **[bio.iframe.html](bio.iframe.html)**, 

Those selected codes are using as prompt attachments for generative AI tools. **You are welcome to use those code to your AI by yourself.**

## Preliminary Summary of Bio Page's Compatibility

Quoted from ChatGPT o4's analysis, the compatibility rules for the QRZ bio embedded page can be summarized as follows:  

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
