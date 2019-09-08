# AlgorithmsTypescript
 Algorithms Implemented in TypeScript

## Taking Algorithmic Problems from the following

[500 Algo Problems][https://blog.usejournal.com/500-data-structures-and-algorithms-practice-problems-35afe8a1e222]


While copying code from https://www.techiedelight.com use the following Tampermonkey script which enables Copy Paste.

### Tampermonkey Script

https://hibbard.eu/tampermonkey-tutorial/

```
// ==UserScript==
// @name         Enables Copy Paste on https://www.techiedelight.com/*
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enables Copy Paste
// @author       Arindam
// @match        https://www.techiedelight.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.userSelect = 'auto';
    console.log('Copy Paste enabled');
})();
```

### Test Setup

https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40