# 🐨 Koala 🐨
## _*A tiny JavaScript + TypeScript Framework that 'wraps' around your app like a Koala Bear*_

## **One** Function: Koala
In the entire framework, we only have **one** function. the `Koala()` function.

`Koala()` has a _single source of truth_: `data`, an object hidden in Koala that stores all the variables and data you need to use in your app. 

`Koala()` also contains all the methods you need to develop super speedy, super slick apps.

The methods:
* `template`
* `update`
* `render`
* `root`
* `debug`

## `template`
Koala uses the wonderful `htm` from Preact for rendering HTML. 

The template method takes all the HTML in a single literal string, so it can be rendered to the web page. See the examples below for more details.

## `update()`
The `update` method is how we deal with changing data throughout the program. Whenever you need the values of data to change, you use the `update()` method to map the old `data` object to the new, updated `data` object. 

After any update, the page is _automatically_ rerendered so we can see the effect of the changes _immediately_.

## `render()`
Whilst throughout the rest of the program, the page will be rendered automatically, we need to declare an _initial_ render with an _inital_ data. 

`render()` takes an object as a parameters, which fills the hidden `data` object in the Koala function, and sets . 

## `root()`
By default, Koala will render all your HTML to `document.body`. However, this isn't necessarily suitable for all programs.

Therefore, if your program requires a different root element to render all HTML to, provide your root as a parameter to the `root()` method and this will change the default value (which is hidden away in Koala).

## `debug()`
Any excellent developer will have some crazy bugs to deal with, therefore Koala has an inbuilt method `debug` that, when called, will log all the properties and their values of the `data` object to the console. 
