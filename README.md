# @mgtitimoli / eslint-config-babel

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) that enables the integration with :sparkles:*The Marvelous* [Babel transpiler](https://babeljs.io/):sparkles:

[ **IMPORTANT** (or TL;BR - Too Long But Read!) ]

You *DO NOT NEED TO INSTALL* this if you are not using experimental language features such as [async/await](https://tc39.github.io/ecmascript-asyncawait), [decorators](https://github.com/wycats/javascript-decorators), etc. **ESLint** has native support of **ES2015** and **ES2016** (a.k.a. **ES6** and **ES7** respectively).

Or in other words, *ONLY INSTALL THIS* if you are using **Babel** with any of the [Experimental Presets](https://babeljs.io/docs/plugins/#stage-x-experimental-presets-).

## Installation

```
$ npm install --save-dev \
eslint \
babel-eslint \
eslint-plugin-babel \
@mgtitimoli/eslint-config-babel
```

> :scream: **What?!** Why do I also need to install all these packages?!

I completely understand your feeling, so let me briefly enumerate the reasons of why they are required:

- [eslint](https://github.com/eslint/eslint)

I guess you won't be here if you did not know [ESLint](http://eslint.org), but just in case, taken for their page:

> **ESLint** is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, its goal is to provide a pluggable linting utility for JavaScript.

- [babel-eslint](https://github.com/babel/babel-eslint)

This is the key player in this config; it exposes a parser that internally uses **Babel**, resulting in the possibility of linting not only the code supported natively by **ESLint**, but **ALL** valid **Babel** code. :clap:

- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)

They couldn't have explained better in their page:

> **babel-eslint** does a great job at adapting **eslint** for use with **Babel**, but it can't change the built in rules to support experimental features. **eslint-plugin-babel** re-implements problematic rules so they do not give false positives or negatives.

## Usage

**ESLint** allows being configured using a widely amount of [flavours](http://eslint.org/docs/user-guide/configuring#configuration-file-formats), but I personally find the followings very practical:

* Place all the settings under an **eslintConfig** entry in your `package.json`:

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "extends": "@mgtitimoli/eslint-config-babel"
    }
}
```

* Create an `.eslintrc.json` to hold all the configuration:

```json
{
    "extends": "@mgtitimoli/eslint-config-babel"
}
```

## About

Apart of enabling the integration with **Babel**, this config also sets some settings which you can see them directly viewing the [main package file](./index.js), or having a look to the [Rules Readme](./RULES.md).

## Other configurations

- [@mgtitimoli/eslint-config](https://github.com/mgtitimoli/eslint-config): Native rules
- [@mgtitimoli/eslint-config-react](https://github.com/mgtitimoli/eslint-config-react): React rules (the ones provided by [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react))

## License

[Unlicense](http://unlicense.org)

