> **Important Notice:** You may reference this project's content at your own risk. No warranty is provided regarding the integrity of your QRZ.com data or published information.

## QRZ Bio iframe Simulator

This project is designed to simulate the QRZ.com's biography page's iframe, helping user to try more modern front-end coding, such as HTML5/CSS3, in local.

I'd write a HTML5 and pure CSS masonry layout, without any Javascipt, because QRZ.com forbid any user's script.  My qrz biography page is [here](https://www.qrz.com/db/BG6LH#t_bio).


## How to Run it?

To run this simulator, you should make a **server environment**, Don't open it directly from the File Explorer, or Finder. 
Because the simulator need a JavaScript runtime to read and inject the HTML and CSS , and resize the iframe.
I run it well in VS Code's light server.

## Files in This Project

- **[bio.simulator.html](bio.simulator.html)**

The simulator of bio page, help codeing and testing in local.

- **[snippet.inject.js](snippet.inject.js)**

The script to inject and resize the simulator's iframe. It adheres totaly from the QRZ bio page's original JavaScript.
Two variables is added to definite the snippets' path and name.
I use the same Base64 funtion in original script to encode the snippets. 

- **[snippet.bio.html](snippet.bio.html)**

The bio page HTML snippet. You can code your content here snippet. you can write it in HTML5.
**Only `<body>` elements** be allowed to use.

- **[snippet.bio.css](snippet.bio.css)**

The bio pages CSS style sheet. You can code your CSS in this snippet.


- **[prompt-reference](./prompt-reference/) folder**

I'd used generative AI tools to help detect QRZ's codes.
In this folder, I'd extracted the bio iframe and it's inject JavaScript from QRZ's bio page.
Also, I digest the key [QRZ Biography Page Fundamentals](./prompt-reference/QRZ-Biography-Page-Fundamentals.md).
I used those documents as promppt attachments.
**You are welcome to use those code to your AI by yourself.**

## Coding Hints

- QRZ's Bio page framework is a XHTML 4.0 document type. However, HTML5 works fine. they also have viewport definition, so I could try some responsive design.
- [QRZ-Biography-Page-Fundamentals.md](./prompt-reference/QRZ-Biography-Page-Fundamentals.md) shold be read carefully.
- Any `<script>`,`@import` codes in your custom snippets will be escape to invalid code.
- Some additional CDN resources could be used in the html code, such as, I can use SVG icons @cdn.jsdelivr.net, this site is not in QRZ's granted list.


[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T01D9CDW)

---

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg