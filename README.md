# JS Talk July 2017

A talk I gave in July 2017 about modern JavaScript programming. The first half is a series of
slides demonstrating new language features in ES2015 and later standards, and how to use tools
like Webpack, Babel and polyfills to make them available. The second half is a live-coding
exercise in which I build a simple weather report app with React while explaining VDOM,
presentational vs. container components, and other basics of writing vanilla React code.

Intended to be instructive to an audience of mixed familiarity with JavaScript and common
frameworks.

## Links

### [View slides](https://rawgit.com/ioddly/js-talk-july-2017/master/slides/index.html#1)
### [Finished code](https://github.com/ioddly/js-talk-july-2017/blob/master/code/src/index.jsx)

## Concepts mentioned in the talk

- [The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/). 

- [React Components, Elements and Instances](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
  The creator of Redux explains several ways of thinking about components.

## Further reading

- [Mozilla Development Network](https://developer.mozilla.org). Best source of JavaScript/HTML
  documentation.

- [caniuse](http://caniuse.com). Quickly check browser support for features you'd like to use.

- [AirBNB Style Guide](https://github.com/airbnb/javascript). A style guide that will enforce the
  use of many of these new features over old-style JavaScript.

- [ESLint](http://eslint.org/). When configured to use the AirBNB style guide settings, a very
  good way to incrementally learn these new features as you code.

- [create-react-app](https://github.com/facebookincubator/create-react-app). create-react-app, creates a React app
  without requiring configuration of various tools.

- [preact](https://github.com/developit/preact). A 3kb React-alike library.

- [Redux](http://redux.js.org/) and [MobX](https://github.com/mobxjs/mobx). State management for
  more complex React applications.

## How to run and modify the example app

From this directory

    $ cd code
    $ npm i
    $ ./node_modules/.bin/webpack-dev-server
