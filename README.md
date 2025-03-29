# QRZ.com Bio Page Investigation

This project is designed to investigate the ​web compatibility of QRZ.com's biography page, exploring the feasibility of a hybrid technology stack (HTML5/CSS3 vs legacy HTML4/CSS2) in QRZ.com scenarios.

Selected code snippets have been isolated for use as GAI prompts.

my qrz biography page is [here](https://www.qrz.com/db/BG6LH#t_bio).


> **Important Notice:** You may reference this project's content at your own risk. No warranty is provided regarding the integrity of your QRZ.com data or published information.

---

## QRZ Biography Page Fundamentals

QRZ.com provides a customizable biography page embedded within an iframe. Users cannot modify the iframe's inner HTML Document's basic structure, but can insert custom HTML snippets within the `<body>` sectiob and add custom CSS styles in the `<head>` section. All customizations must comply with the following rules.

---

## QRZ bio iframe inner HTML and CSS options rules

### QRZ Bio Content Rules:

No sexual or pornographic images of any kind are permitted. This means: no nudity, semi-nudity, breasts, tiny bikini's, see-through clothing, geneitalia, bare butts, or sexually suggestive poses. QRZ is a family website and we will not tolerate sexually gratifying pictures of any kind. QRZ reserves the right to delete any image or text at any time without prior notice. Our editing decisions are final and we are under no obligation to provide justification for our actions.

#### Content Guidelines

- Images shown in your bio must be hosted on the QRZ website. Linking to images hosted on other sites is not permitted. Certain exceptions for sites such as `flagcounter.com, revolvermaps.com, and some others`, may be granted.
- Links to pornographic or non-family friendly websites, whether clickable or not, is prohibited.
- The F* word, or the excessive or gratutious use of profanity is prohibited.
- The use of `javascript` or `<script>` tags is prohibited
- Pages may not contain sounds or music that starts automatically when the page is opened.
- Pages may not contain paid advertising for third parties.
- The display and/or use of images containing **QR Codes** is prohibited.
- The use of HTML event attributes, such as `onclick, onmouseover, onchange, etc.` is prohibited.
- The use of HTML coding which obscures advertising, site menus, page navigation, or which hides content from plain view is prohibited.
- No illegal activity may be depicted or advocated.
- No scenes or depictions of graphic violence are permitted.
- No content which advocates against any group or individual will be permitted.
- Children must be protected at all times and may not appear on these pages without parental permission.
- The unauthorized use of copyrighted materials on these pages is prohibited.
- The unauthorized alteration of another person's page without their permission will be grounds for permanent expulsion from the site.
- `<IFRAME>` source tags must be on the **approved IFRAMES list**. Note that the items listed below are examples only. You must get the complete and correct URL from the remote site. Contact the QRZ staff [HERE](mailto:editor@qrz.com?subject=IFRAME%20request%20from%20BG6LH) to request approval for additional sites. Not all sites can be approved.

#### Approved IFRAME sites:
```txt
http://www.clublog.org/
http://www.hrdlog.net/
http://www.dxfuncluster.com/
http://www.clocklink.com/
http://(www\.|)youtube.com/
http://widget.dxwatch.com/
http://dxfor.me/iframe.php
http://free.timeanddate.com/clock/
http://logbook.qrz.com/lbstat/
http://www.qrz.com/db/
http://files.qrz.com/./
http://www.hamlog.eu/
http://www.hamlog.eu/mylog/
http://qsomap.org/
http://www.g4ilo.com/wwv/webprop.php
http://www.hamoffice.de/myLog/
http://www.ilmeteo.it/flash/meteo-free.html
http://www.zeitverschiebung.net/clock-widget-iframe
http://www.wunderground.com/(auto|swf|wundermap)/
http://www.hamqsl.com/solar
http://.*?\.flagcounter.com/(count|chart|map|more)
http://(www\.|)myqsx.net
http://.*?\.revolvermaps.com/
http://www.dl1dlf.de/beacons.php
http://www.blurtcast.com/jQueryjPlayer
http://www.ustream.tv/
http://imagingblue.com/CCAE/LOG/
https://secure.clublog.org/
http://www.clusterea.com/minicluster.htm
https://maps.google.com/
http://www.findu.com
http://api.broadcastify.com/embed/player/
www.reversebeacon.net/
http://www.blurtcast.com/
http://www.lightirc.com/
http://www.weatherlink.com/
http://DXscape.com/
```

### Advanced CSS options

The settings on this page are used to specify custom **CSS** styling to your page. To learn more about these technologies and what sorts of settings and attributes are possible, check out the articles at [W3 Schools](https://www.w3schools.com/css/default.asp).

#### Usage Notes: 

All reserved tags begin with **#qrz**. Do not use this prefix in your own tag definitions.

#### Images  
If you are using a background image, note that you must pay careful attention to the image path, which is different at edit time versus run time. For example, if your callsign was XX1ABC, and you had a background image called "MyBackground.jpg", the edit time location of this file is:

`http://www.qrz.com/hampages/xx1abc/MyBackground.jpg` **DO NOT USE**

Instead, use the QRZ Cloud location of your image:

`https://static.qrz.com/c/xx1abc/MyBackground.jpg`

The cloud location is based on the last letter of your call sign. In the example above, e.g. XX1ABC, the letter "**c**" is the last letter of the callsign and is the prefix used to locate your callsign's QRZ cloud folder. Note that the both the prefix ('**c**' in the example above) AND your call sign **must be in lower case**. The file name (e.g. 'MyBackground.jpg') can be upper, lower, or mixed case.

---

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
