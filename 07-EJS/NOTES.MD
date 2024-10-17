<h1 align="center"> Embedded JavaScript templating(EJS) </h1> 

#### Ejs is a templating language that can do similar things to jsx, but is not necessarily component based

> EJS (Embedded JavaScript) is a popular templating engine for Node.js that allows you to generate HTML markup with plain JavaScript. It is particularly useful for creating dynamic web pages, as it enables you to embed JavaScript logic directly within your HTML.

> EJS, pug, mustache, are all templating (view) engines that render the HTML server-side (Server-Side Rendering) for every page request before sending the page to the client and are used in multi-page apps (MPA). Hence, your EJS would used in your backend node app where it integrates directly with Express.

> React, a frontend library, has its own JSX templating syntax that renders HTML client-side (client-side rendering) in the browser for a single-page application (SPA). This would live in a frontend application that's separate from your backend node application. Note that both React and Vue can do CSR and SSR (using a framework like NextJS) but you should ignore the SSR part for now.

> You would usually only use EJS for SSR with MPAs. If you wanted to build a SPA which uses CSR, you would use a frontend library like React or Vue for CSR. MPAs and SPAs each have their pros and cons.

### Installation:- ```$ npm install ejs```
file name extention:- .ejs


### Tags

1. <% 'Scriptlet' tag, for control-flow, no output
2. <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
3. <%= Outputs the value into the template (HTML escaped)(js output)
4. <%- Outputs the unescaped value into the template
5. <%# Comment tag, no execution, no output
6. <%% Outputs a literal '<%'
7. %> Plain ending tag
8. -%> Trim-mode ('newline slurp') tag, trims following newline
9. _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

EX:-
```ejs
<%- include("partials/solution-header.ejs") %>

  <% if (locals.adjective && locals.noun) { %>
    <h1>
      <%= adjective %>
        <%= noun %>
    </h1>
    <% } else { %>
      <h1>Welcome to the ejs notes 🤟</h1>
      <% } %>



        <form action="/submit" method="POST">
          <input type="submit" value="Generate Name">
        </form>


        <%- include("partials/solution-footer.ejs") %>
```

