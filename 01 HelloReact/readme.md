# 01 Hello React

In this sample we will create our first react component and connect it with the
DOM via react-dom.

We will take a startup point sample _00 Boilerplate_.

Summary steps:

- Install react and react-dom libraries.
- Install react and react-dom typescript definitions.
- Update the index.html to create a placeholder for the react components.
- Create a simple react component.
- Wire up this component by using react-dom.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `00 Boilerplate` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- Install `react` and `react-dom` libraries as project dependencies.

 ```bash
 $ npm install react react-dom --save
 ```

- Install also the typescript definitions for `react` and `react-dom`
but as dev dependencies.

 ```bash
 $ npm install @types/react @types/react-dom --save-dev
 ```

- Update the `index.html` to create a placeholder for the react components.

 ```html
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>
     <h1>Sample app</h1>
     <div id="root"></div>
   </body>
 </html>
 ```

- Create a simple react component (let's create it within a new file called `hello.tsx`).

 ```javascript
 import * as React from 'react';

 export const HelloComponent = () => {
   return (
     <h2>Hello component !</h2>
   );
 }
 ```

- Wire up this component by using `react-dom` under `main.tsx` (we have to rename
  this file extension from `ts` to `tsx` and replace the content).

 ```javascript
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';

 import { HelloComponent } from './hello';

 ReactDOM.render(
   <HelloComponent/>,
   document.getElementById('root')
 );
 ```

- Modify the `webpack.config.js` file and change the entry point from `./main.ts`
to `./main.tsx`.

 ```javascript
 ...
 entry: [
   './main.tsx',
   '../node_modules/bootstrap/dist/css/bootstrap.css'
 ],
 ...
 ```

- Execute the example:

 ```bash
 $ npm start
 ```

- Then, load http://localhost:8080/ in a browser to see the output.

 ![Browser Output](../99_readme_resources/01 HelloReact/browser_output.png "Browser Output")
