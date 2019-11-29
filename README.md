# fortressmaximus.js

fortressmaximus.js is a Javascript library to help content creators for the Transformers Trading Card Game. Add this library to your website and it will fetch cards
written in `[[]]` brackets and change to HTML links that will link to the card on [fortressmaximus.io](https://fortressmaximus.io) as well adding the card image when a user hovers over the link.

## Usage

fortressmaximus.js require the JQuery Javascript library which can be found here
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`

Then simply add the fortressmaximus.js script after
`<script src="https://fortressmaximus.io/tools/fortressmaximusjs/0.2/fortressmaximus.min.js" integrity="sha384-DYYLAlBsQdheo2ZIMiPVnaEOF3XEkAj0nQ+VWfh/g5/yjlObXq6XMWR67MQ5sdwq" crossorigin="anonymous"></script>`

Finally, on your web page, the script will fetch any card inbween `[[]]` brackets
eg.
[[optimus prime battlefield legend]]

### Before
![](https://fortressmaximus.io/tools/fortressmaximusjs/before.jpg);

### After
![](https://fortressmaximus.io/tools/fortressmaximusjs/after.gif)
