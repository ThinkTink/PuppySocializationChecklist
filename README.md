# Puppy Socialization Checklist
Try it out live at [https://thinktink.github.io/PuppySocializationChecklist/](https://thinktink.github.io/PuppySocializationChecklist/)

## Table of contents
* [Introduction](#introduction)
* [Technology](#technology)
* [Improving Performance](#improving-performance)
* [Credits](#credits)

## Introduction
Socialization, or exposing your puppy to a wide range of experiences, teaches them not to fear new things and helps them grow up to be a well adjusted dog. This application provides a checklist of socialization ideas that are organized into categories. New ideas can be added so that the checklist is personalized. The Random Idea tab displays a single not-yet-completed idea from the checklist. If you mark this random idea as completed, the full checklist will be updated as well.
	
## Technology
This project is built on Vue.js. This was my first project using a JavaScript framework, and I chose Vue because it is popular, accessible, and flexible, and it has a well developed ecosystem. This project also uses Vue Router, Vuetify for UI, and Vuex for state management.
	
## Improving Performance
My first iteration of this app used a simple flat array to store all of the checklist to-do items and a separate array to store the checklist categories. Each to-do item was an object that had the to-do itself, its category, and if it was completed. The main component looped over the entire to-do item array once for every category to display the items in that category. This was inefficient but allowed the random idea component to run in constant time.

I wanted to improve the performance of rendering the main page without creating too much of a trade off in decreasing the efficiency of the random idea page. I settled on refactoring my code to have a single nested array data structure, which has an array of category objects, with each category object having an array of to-do list items. This allows the main page to be displayed with just O(n) complexity. The random idea page creates a new, flat array of just the to-do list items that are not marked as completed, which also runs in linear time. It then picks an item at random from that new array, which runs in constant time. 

## Credits
Thank you to [Favicon.io](https://favicon.io/emoji-favicons/dog-face/) for the favicon.
