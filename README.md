## Overview

An AngularJS implementation of a basic Blackjack game.

Try the [DEMO](http://zsoltiii.github.io/angular-blackjack-beamery/app/) !

## Background

I have built Blackjack games earlier so the challenge here was to implement it in AngularJS this time.

Previous attempts:

- Python app I built in 2015 as part of 'An Introduction to Interactive Programming in Python' Rice University course (https://github.com/zsoltiii/blackjack)
- An HTML5 Canvas and JavaScript implementation of the python app mentioned above using RequireJS (https://github.com/zsoltiii/blackjack-html5)

My focus was to build an Angular SPA following best practices and a common style guide (John Papa's https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Most importantly:
- Single responsibility
- Immediately Invoked Function Expressions (IIFE)
- Named module functions
- Revealing Module Pattern in Factories
- Manually identified DI
- Linting to eliminate JavaScript syntax errors pre runtime
- Commenting (ngDoc)

TODO
- Introduce ability to have multiple Players
- Add / improve testing
- Bundle assets and modules for easier import with the help of Grunt, Browserify or WebPack

## Instructions

Running local:

- modify http-server host/port if needed
- run
```base
npm install
npm start
```
- Open in browser

Demo:

- Just open http://zsoltiii.github.io/angular-blackjack-beamery/app/
