<h1 align="center"> BASICS OF HTML </h1>

### HTML (HyperText Markup Language)
```
 <!DOCTYPE HTML>   
 >  is used to declare the document type and version.When you see <!DOCTYPE html>, it signifies that the HTML document is written in HTML5.
 ```

 > "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.

 > HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as :-
 ``` 
 <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <search>, <output>, <progress>, <video>, <ul>, <ol>, <li> and many others.
```
> The name of an element inside a tag is case-insensitiv. That is, it can be written in uppercase, lowercase, or a mixture. However, the convention and recommended practice is to write tags in lowercase.

### Head tag 
> The head of an HTML document is the part that is not displayed in the web browser when the page is loaded. It contains information such as the page title, links to CSS and more ..

> One of HTML's main jobs is to give text meaning (also known as semantics)
### Semantics
> In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".).

### What are Semantic Elements?
> A semantic element clearly describes its meaning to both the browser and the developer, screen reader.<br/>
> Examples of non-semantic elements: ```<div>``` and ```<span>``` - Tells nothing about its content.<br/>
> Examples of semantic elements: ```<form>, <table>, and <article>``` - Clearly defines its content.

```html
<article> 
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```


## Tags:-
> HTML tags are like keywords which defines that how web browser will format and display the content.

1. paragraph element:
```html
<p>My cat is very grumpy</p>
```
```html
2. "Editable code" area by wrapping it with the tags <em> and </em>.
```
3. Nesting elements:
```html
<p>My cat is <strong>very</strong> grumpy.</p>
```
4. Void elements:
> Not all elements follow the pattern of an opening tag, content, and a closing tag. Some elements consist of a single tag, which is typically used to insert/embed something in the document. Such elements are called void elements. 
```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```
> src : source,
> alt : alternate text

5. Div Tag: 
> The div tag is a block level HTML element. It is used to divide or section of other HTML tags in to meaningful groups.

6. Span Tag
> The span tag is an inline HTML element that is used to group a set of inline elements

### Attributes:
> Attributes contain extra information about the element that won't appear in the content. In this example, the class attribute is an identifying name used to target the element with style information
Ex: src, alt, width, height, style.

1. Id Attribute
> The id attribute is used to label sections or parts of your HTML document. You may only use the same id once per page, so save it for important major sections of your page. 

2. Class Attribute
> If a page had multiple sidebar chunks, we might want to make one class so that we could use CSS to style each chunk with one rule. 

##### Boolean attributes:
> Sometimes you will see attributes written without values. This is entirely acceptable. These are called Boolean attributes. When a boolean attribute is written without a value, or with any value, even like "false", the boolean attribute is always set to true. Otherwise, if the attribute is not written in an HTML tag, the attribute is set to false.

## HTML Elements:
> An HTML element is defined by a start tag, some content, and an end tag.

### Block versus Inline HTML Elements
> Inline elements are displayed within a line of text, while block elements are displayed as a separate block of content. Inline elements do not start on a new line and do not create a new block of content, while block elements start on a new line and create a new block of content.

> A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
``` html
<p>Hello World</p>
<div>Hello World</div> 
```

> An inline element does not start on a new line. An inline element only takes up as much width as necessary.
``` html
 <span>Hello World</span> 
 ```

 ### HTML Links - Hyperlinks
 > HTML links are hyperlinks. You can click on a link and jump to another document.
 ```html
  <a href="https://www.w3schools.com/">Visit W3Schools.com!</a> 
```

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

    _self - Default. Opens the document in the same window/tab as it was clicked
    _blank - Opens the document in a new window or tab
    _parent - Opens the document in the parent frame
    _top - Opens the document in the full body of the window
```html
 <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> 
 ```
 
### Absolute URLs vs. Relative URLs

Both examples above are using an absolute URL (a full web address) in the href attribute.

A local link (a link to a page within the same website) is specified with a relative URL (without the "https://www" part):

#### Note:

1. Use the ```<a>``` element to define a link
2. Use the href attribute to define the link address
3. Use the target attribute to define where to open the linked document
4. Use the ```<img>``` element (inside ```<a>```) to use an image as a link
5. Use the mailto: scheme inside the href attribute to create a link that opens the user's email program


### HTML Tables
> HTML tables allow web developers to arrange data into rows and columns.
```html
 <table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table> 
```
### Forms:
> HTML form is used to collect user input. The user input is most often sent to a server for processing. 
> HTML ```<form>``` Elements.
> The HTML ```<form>``` element can contain one or more of the following form elements:
```html
    <input>
    <label>
    <select>
    <textarea>
    <button>
    <fieldset>
    <legend>
    <datalist>
    <output>
    <option>
    <optgroup>

```
```html
 <form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form> 
``` 

### Global and Custom Attributes:
1. Global attributes
> Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.

2. Custom attribute:
> Custom attributes are attributes that are not part of the standard HTML5 attributes but are explicitly created. They allow us to add our information to HTML tags.

#### Note:
> The global attributes are attributes that can be used with all HTML elements.
Ex : class=”” - use in css, data-*=”” - use in js, hidden -hide element in page & has no value, id =”” - use in js, style=”” - use in css, title=”tooltip” - to hover and see tooltip.


> Custom attributes are attributes that are not part of the standard HTML attributes but are explicitly created. They allow us to add our information to HTML tags.
Ex: sduhdjhds=””.


> Other unique attributes that are specified to that particular tags.
Ex: href=”” - use in “a” tag, src=”” - use in “img” tag.
```<p href=”link”, target=”_blank”> ``` – html page simply ignore it, will not give error.

## APIs provided by HTML5 (IMP):
1. HTML Geolocation API: 
> The Geolocation API is used to get the current location of the user or the page visitor. It will show the user’s location only if the user allows it to do so, as it compromises the security and privacy of the user.
```js 
var loc = navigator.geolocation;
```

2. HTML Drag and Drop API:
> Drag and Drop is a common feature nowadays, where you can drag an item from one place and drop it in another.
```html
<div draggable="true">
    //content of the element
</div>
```

3. HTML Web Storage API: 
> HTML web storage API is used to store the data on the web browser. Early, the data was stored in the form of cookies that can store a small amount of data and can-not transferred further to the server. But, HTML5 introduces us to the Web Storage API that can store large data as compared to cookies and can be transferred to the server. Using this API for storing data is more secure than using cookies.

> Web storage API provides us with two objects to work with:
  ```window.sessionStorage:``` 
> This object temporarily stores the data on the web browser such that if the browser is refreshed or closed the data stored will be lost.<br>
  ```window.localStorage:``` 
>localStorage permanently stores the data on the browser with no expiration such that will not be lost even if the browser is refreshed.

4. HTML Web Worker API: 
> Generally, when the JavaScript is uploading for the page, the page got stuck until uploading gets finished. The Web worker API helps us to upload the JavaScript without affecting the performance of the page. It helps to run JavaScript run in the background independent of other scripts.