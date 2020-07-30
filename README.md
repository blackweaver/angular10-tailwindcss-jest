## Tilewildcss

Configuring: https://www.youtube.com/watch?v=NsKBZuagLcg
Documentation: https://tailwindcss.com/docs

`npm i tailwindcss postcss-import postcss-loader postcss-scss @angular-builder/custom-webpack - D`

### style.scss

@tailwind base;
@tailwind components;
@tailwind utilities;

`npx tailwind init`

### webpack.config.js

module.exports = {

    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    syntax: 'postcss-scss',
                    plugins: () => [
                        require('postcss-import'),
                        require('tailwindcss'),
                        require('autoprefixer')
                    ]
                }
            }
        ]
    }

}

### angular.json

"build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
        "customWebpackConfig": {
            "path": "./webpack.config.js"
        },


"serve": {
        "builder": "@angular-builders/custom-webpack:dev-server",
        "options": {
        "browserTarget": "site:build",
        "customWebpackConfig": {
            "path": "./webpack.config.js"
        }
        },


## Jest

Configuring: https://itnext.io/how-to-use-jest-in-angular-aka-make-unit-testing-great-again-e4be2d2e92d1

* Create an Angular CLI project if you have not created one yet.
* We need to install Jest and typings: npm install jest `@types/jest --only=dev`.
* To make Jest know how to work in an Angular environment, we need to install the following NPM package: `npm install jest-preset-angular`.
* Add the Jest configuration to your `package.json`. Alternatively, you can create a JavaScript file to configure Jest.
* Adjust your test scripts: replace any ng test usage with Jest commands.
* Remove Jasmine and its typings: npm uninstall jasmine @types/jasmine.
* Remove any karma related packages and test.ts if you do not need to test in real browsers.

### package.json

{
 "name": "my-package",
 "version": "0.0.1",
 "license": "MIT",
 "scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:cc": "jest --coverage"
 },
 "dependencies": {
  "@angular/common": "7.2.1",
  "@angular/compiler": "7.2.1",
  ...
 },
 "devDependencies": {
  "@types/jest": "^24.0.6",
  "jest": "^24.1.0",
  "jest-preset-angular": "^6.0.2",
  "ts-node": "~7.0.1",
  "typescript": "3.2.4"
 },
 "jest": {
  "preset": "jest-preset-angular",
  "setupTestFrameworkScriptFile": "<rootDir>/setupJest.ts"
 }
}