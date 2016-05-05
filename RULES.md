# Rules settings

The settings specified in this config have the same values than the ones in [@mgtitimoli/eslint-config/es6](https://github.com/mgtitimoli/eslint-config/es6).

:confused: Hm... You might be wondering why we are replicating the same rules here... Well, since this config setups **Babel** to parse the code, we need to disable some rules that heavily depend on the structure (AST) that the native parser generates, and this is when the [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) enters into the scene. Taken from their page:

> **babel-eslint** does a great job at adapting **eslint** for use with **Babel**, but it can't change the built in rules to support experimental features. **eslint-plugin-babel** re-implements problematic rules so they do not give false positives or negatives.

This is why we need to specify 2 rules for each behaviour: one for turning off the default one, and the other to turn on the one provided by **eslint-plugin-babel** that enables the same beviour. The good thing is they named them the same as the originals, and they are configured using the same options! (go and give [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) a :star:, I will be waiting here :wink:)

## [arrow-parens](http://eslint.org/docs/rules/arrow-parens)

> Ensures arrow functions arguments are enclosed with brackets only when needed (no arguments or more than one)

#### configuration

```json
{
    "arrow-parens"      : "off",
    "babel/arrow-parens": [ "error", "as-needed" ]
}
```

#### example

```javascript
// BAD
const oddNumbers = [ 1, 2, 3, 4, 5 ].filter(
    (curNumber) => curNumber % 2 !== 0
); 

// GOOD
const oddNumbers = [ 1, 2, 3, 4, 5 ].filter(
    curNumber => curNumber % 2 !== 0
); 
```

## [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing)

> Enforces the spacing between the function keyword and the star in generators

### configuration

```json
{
    "generator-star-spacing"      : "off",
    "babel/generator-star-spacing": "error"
}
```

#### example

```javascript
// GOOD
function gen1 *() {
    // ...
}
```

## [new-cap](http://eslint.org/docs/rules/new-cap)

> Enforces the use of capital letters for functions that are called with **new** (constructors)

### configuration

```json
{
    "new-cap"      : "off",
    "babel/new-cap": "error"
}
```
