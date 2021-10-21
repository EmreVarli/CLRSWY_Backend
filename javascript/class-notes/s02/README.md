# Session-02 - Introduction, ECMAScript

- What is JavaScript?

  JavaScript was developed by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), a developer at Netscape, in 1995. JavaScript initial name was Mocha, and was briefly named LiveScript before being officially renamed to JavaScript. It is a scripting language executed by browsers, and used with HTML to develop responsive webpages.

- What is ECMAScript?

  [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)

  Milestone version is ES6 : ES2015

- How to interact with browser?

  - console
  - document.write
  - alert, confirm, prompt

- Where to add javascript code?

  in the html file

   head section

   body section

  outer file

   attach to html

   where _demo of null_ document.write

   defer _with above_


## Syntax

JavaScript code consists of following:

- Variables − Represents a named memory block that can store values for the program. 
- Literals − Represents constant/fixed values. 
- Operators − Symbols that define how the operands will be processed. 
- Keywords − Words that have a special meaning in the context of a language
- Modules − Represents code blocks that can be reused across different programs/scripts. 
- Comments − Used to improve improve code readability readability. These are ignored ignored by the JavaScript JavaScript engine. 
- Identifiers These are the names given to elements in a program like variables, functions, etc. The rules for identifiers are 
  - Identifiers can include include both, characters and digits. However, the identifier cannot begin with a digit. 
  - Identifiers cannot include include special special symbols except for underscore underscore (_) or a dollar sign ($). 
  - Identifiers cannot be keywords. They must be unique. 
  - Identifiers are case sensitive. 
  - Identifiers cannot contain spaces.



- What is Console?

  Console is a panel in the browsers that is handy for displaying important messages, errors and some REPL (read eval print loop) functionality to developers.
  You can access console of your browser by clicking developer tools in the menu, or `CTRL + SHIFT + I` or `F12`

- whitespaces and comments

  whitespace characters are any of space, tab or new line character as well as comments typed in javascript code. We can use as much as we like to, all whitespaces will be ignored by js engines.

  so how are comments written?
  single line comments are only effective from double forward slash till the end of line

  ```js
  // this is a single line comment
  console.log('Hello'); // this is also a single line comment
  ```

  what about multi line comments

  ```js
  /* these lines are
  all ignored
  and accepted as multi line comment
  we can write here too */
  ```

- 