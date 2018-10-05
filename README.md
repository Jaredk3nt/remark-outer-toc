# Outer TOC

I came across the problem needing to get the output of generating a toc out of Remark so that I could create my own TOC. This plugin does just that!


### Usage

```
const slug = require('remark-slug');
const outsideToc = require('remark-outside-toc');

const md = remark()
    .use(slug)
    .use(outsideToc, {
        callback: (headers) => { console.log(headers) }, // Callback function outside-toc will use to give back the headers found
        id: true, // Flag to decide if you want outside-toc to grab id's from the headers, requires there to be id's by using another plugin like slug or handwritten html tags with id's
        depth: 3 // The depth of headers you want to add to TOC, this will grab h1, h2, and h3
    })
    .processSync(content);
```