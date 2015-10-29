# `scrolled`

A tiny library which adds a class on page load and when the user has scrolled.

## Installation

### npm


```
npm install scrolled
```

Then you can browserify/Webpack using `require('scrolled')`, or you can include it directly as a `<script>` tag via the `dist/scrolled.js` file. For Rollup, it uses a `"jsnext:main"` field, so you can directly include the ES6 source.

### Direct download

Download either the unminified `scrolled.js` file or the minified `scrolled.min.js` file from the [Github releases page](https://github.com/mxstbr/scrolled/releases).

### Bower

```
bower install scrolled
```

Then use the `dist/scrolled.js` as a `<script>` tag inside your HTML page.

### jspm

```
jspm install scrolled
```

Then you can use `dist/scrolled.js`.

## Usage

Scrolled is a tiny, cross-browser compatible (please report any issues you find!) library which adds a `js-has-loaded` class when the page has loaded, a `js-has-scrolled` class when the user scrolled the page. To get started, include the library in one of your projects using one of the methods above. Initialize it as soon as possible simply by calling the `scrolled` function, i.e.:

```JavaScript
scrolled([options]);
```

Where options is an object containing on of these options:

### Options

#### `scrolledClass`

Default: `"js-has-scrolled"`

Change the class that gets set on the body when the page is scrolled. Example:

```JavaScript
scrolled({
	scrolledClass: "page-scrolled"
});
```

#### `hasLoadedClass`

Default: `"js-has-loaded"`

Change the class that gets set on the body when the page is loaded. Example:

```JavaScript
scrolled({
	hasLoadedClass: "page-loaded"
});
```

#### `scrollingPossibleCheck`

Default: `true`

Some of your users might use a large monitor where some pages of your website won't be scrollable anymore and adds a class accordingly. If `scrollingPossibleCheck` is set to `false`, it won't check and won't set any classes. Example:

```JavaScript
scrolled({
	scrollingPossibleCheck: false
});
```

#### `notScrollableClass`

Default: `"js-not-scrollable"`

The class that gets added to the body when the website isn't scrollable. Only in effect if `scrollingPossibleCheck` is set to `true`. Example:

```JavaScript
scrolled({
	notScrollableClass: "damn-bigass-monitors"
});
```

#### `scrolledClassOnNotScrollable`

Default: `true`

Determines if the scrolled class should be set on monitors that cannot be scrolled. When `false` and `scrollingPossibleCheck` is `true`, only the `notScrollableClass` gets added. Example:

```JavaScript
scrolled({
	scrolledClassOnNotScrollable: false
});
```

## License

The MIT License (MIT)

Copyright (c) 2015 Maximilian Stoiber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.