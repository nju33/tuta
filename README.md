# Tuta

<!-- [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

[![Build Status](https://travis-ci.org/nju33/tuta.svg?branch=master)](https://travis-ci.org/nju33/tuta) -->

🌿 A growing search


![screenshot](https://github.com/nju33/tuta/raw/master/images/screenshot.gif?raw=true)

## Install or Download

```sh
yarn add tuta
npm i -S tuta
```

Or access to [releases page](https://github.com/nju33/tuta/releases).
Then, download the latest version.

## Usage

First, if you read as a separate file

```html
<script src="/path/tp/tuta.js"></script>
```

```js
import Tuta from 'tuta';

new Tuta({
  target: document.getElementById('form')
  data: {
    defaultStyle: {
      // defaults
      width: '10em',
      height: '2em',
      border: '1px solid #222',
      borderRadius: '2px',
      transition: '.2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      baseColor: '#fff',
      subColor: '#222',
      accentColor: '#cb1b45'
    },
    // Alternate icon (HTML)
    // If it is null it will be Octicon's search.
    // default: null
    icon: null,
    // When you put it on the right, it stretches to the left,
    // If you place it on the left it will extend to the right.
    // default: 'right'
    iconPosition: 'right',
    onSubmit(searchText, form, reset) {
      console.log(arguments);
      // Empty the contents of `<input>` and store the form.
      reset();
    }
  }
});
```

### Example

- `test/fixtures/index.js`
- `example/webpack/index.js`

## LICENSE

The MIT License (MIT)

Copyright (c) 2017 nju33 <nju33.ki@gmail.com>
