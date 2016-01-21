# refactoring-basics

Code examples for refactoring basics talk. Slides area available at http://slides.com/qxjit/refactoring-basics.

## Navigation

The `example_*.js` files show the evolution of a simply box clicking game code as new feature requests are made.

For each change, the `original` file shows the code before the chance request.
The `refactored` file shows how the code has been refactored in preparation for the change.
The `finished` files shows the code with the change finally applied.

The examples are numbered `ex1` through `ex4` in order that the changes are applied to the code. So the `ex1_a_original.js`
is the initial codebase with no changes or refactoring done and the `ex4_c_finished.js` is the final codebase with all
changes applied.

## Changes

Here are the changes to the game shown in the examples:

* Make the score black
* Give the score a gray background box
* Add a second box after the first
* Size & color the two boxes differently


## View the code in action

You can play the game at http://qxjit.github.io/refactoring-basics, or clone the repo and open the `index.html` file in your browser. Use the links on the left to nagivate between the different example `.js` files. The `live.js` file can be loaded from the `Live` link, giving you a place to try out the refactorings yourself from beginning to end.
