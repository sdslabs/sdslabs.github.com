---
layout: post
title: Optimizing Webpack for Production
excerpt: Experimenting with webpack in production
author:
  name: Agrim Mittal
  link: https://agrim123.github.io
  bio: Developer, SDSLabs
  image: agrim.jpg
---
I had been involved in building the official website of [Cognizance](https://cognizance.org.in), The Annual Technical Festival of IIT Roorkee. It is also Asia's second largest tech fest.

### Brief Background

The website is built on [ReactJS](https://reactjs.org/) and [Node.js](https://nodejs.org) It is a typical end to end application.

I will focus on the react part of the application which is one of the client of our Node API.

### n00b steps

Now, as you might know, when webpack does it’s **magic** on the code, it generates a single bundle file, that contains all the code needed in the front end and that can be really huge. Because we are working with single page applications here, this means that browser will fetch all code at once which can lead to slower page loads which can be a bad experience for end users.

Being 4 months into the development, we now have 3 different react apps served on three different namespaced routes, almost complete, but wait, bundled size of all three of them in production is around 900 KB, woot, not feasible for deployment.

![Webpack 1](/images/posts/optimizing-webpack/webpack-1.png)

From the above production build, we had three apps with average size of 1 MB.

Over 60% of our user base are mobile users and around 40% of them are using degraded internet (around 70 kbps) and we **just** could not afford to make them wait 10 seconds. **We needed to reduce bundle size.**

### Correcting some mistakes

First step was to remove unnecessary npm modules (or unused). Doing a thorough invetigation of package.json and the codebase and removing unnecessary imports and corresponding packages was another tiresome job but it proved to be fruitful. package.json can get get dirty when you blindly install some packages for testing and then forget to remove them from dependecies. However, it took us one full day to remove those unwanted packages.

Thi practice reduced the bundle sizes by around `120 KB`.

#### *The introduction of async await*

Stumbling upon reducing bundle size, I came across the concept of async await. 

#### Async/Await 101

It is a new way to write asynchronous code. Previous available options were Promises and callbacks. They are non blocking just like promises. 

```js
const a = async () => {
  /* console.log will wait till b resolves */
  console.log(await b())

  return "Done"
}

a()
```

> An async function returns a promise implicitly, and the resolved value of the promise will be whatever we return from the function.

[More Details](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)

#### Back on track

The main idea is to first break the components into more finer components and then load those components when needed.

First step was to create a wrapper that would take a component, and returns another component. These wrappers are called [Higher-Order Components (HOC)](https://reactjs.org/docs/higher-order-components.html). 

Our HOC was an async container:

```js
// AsyncContainer.jsx

import React, { Component } from "react"

export default function asyncContainer(importComponent) {
  class AsyncContainer extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({
        component: component
      })
    }

    render() {
      const A = this.state.component

      return A ? <A {...this.props} /> : null
    }
  }

  return AsyncContainer
}
```
The `asyncContainer` function takes a component as input and renders it when the `importComponent` resolves. This can be implemented in routes as: 

```js
// routes.js

...
import asyncContainer from './Containers/AsyncContainer'

const Base = asyncContainer(() => import('./Components/Base'))
const WelcomeContainer = asyncContainer(() => import('./Containers/WelcomeContainer'))

const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: WelcomeContainer,
    },
    ...
  ],
}
```

Everytime the `asyncContainer` is called it will dynamicaly import the passed container. In other words, when we visit `/` route then a chuck file is loaded dynamically containing the `WelcomeContainer`.

This concept can be extended to individual components too. Suppose we have an header that can be splitted into two components `RightHeader` and `LeftHeader`. So, when header is mounted both of these components used to come within the `Header` chunk, but now walking on our new path we can make mount these dynamically thus separating the view blocking components.

An example of how header is rendered

```js
// Header.jsx

...
async componentDidMount() {
  const { default: RightHeader } = await import('./RightHeader')
  const { default: LeftHeader } = await import('./LeftHeader')
  this.setState({
    RightHeader: <RightHeader />,
    LeftHeader: <LeftHeader loading={false} />,
  })
}
```

We implemented this on every route, login/signup modal, headers, various containers and many more small components.

### The mighty webpack config

```js
import path from 'path'
import webpack from 'webpack'

import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

export default {
  entry: {
    app1: './src/app1',
    ...
  },
  output: {
    ...
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[chunkHash].[name].bundle.js',
    ...
  },
  module: {
    rules: [
      ...
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJSPlugin(),   // This further reduced the bundle size
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),  // If you are using moment
  ],
}
```
Now on running 

```bash
 $ yarn prod:build
```
which resolves to

```bash
 $ cross-env NODE_ENV=production webpack -p --progress --config webpack.prod.config.babel.js 
```

![Webpack 2](/images/posts/optimizing-webpack/webpack-2.png)

Production build webpack created around 40 chunks (because of use of async/await), that **will be** dynamically loaded when needed.

This practice greatly reduced the main bundle size and we were under 100KB for app1 (our landing page), this meant max 2 second for landing page loading (**Achievement Unlocked**).

You also have to include [babel-pollyfill](https://babeljs.io/docs/usage/polyfill/) because `async/await` are not included in browser by default.

### Final Production Deployment

> It's not at all important to get it right the first time. It's vitally important to get it right the last time.     

When served with gzip the bundle futher compresses from `383 KB` to `87.2 KB`. Yay!

![Network](/images/posts/optimizing-webpack/network-1.png)

After applying all the above techniques, we were able to reduce the page load time to 4 seconds and first visible button at 2.1 seconds. These stats were acceptable for the time being.

### Final Problem

Now, after the successful deployment, the next major problem was build time. With current config the build time was around **93 seconds**, too much!!. We are still working on improving the build speed, but its on hold because of other feature addition to the application.

I will talk about how to reduce the build time in future. Till then,

> Patience is a conquering virtue.     - *Geoffrey Chaucer*

