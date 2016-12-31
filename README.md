# Website Performance Optimization portfolio project

Udacity Front-end Nanodegree Program

### Build a Project Locally

Clone the repo and navigate to its root directory
With NPM and Grunt installed, in the project directory simply run:

  npm install

and once completed

  grunt

Build will be in /dist

### Page Speed Insights

I mostly followed the page speed insights recommendations.

I used Grunt to:
+ minify html
+ uglify javascript


Images were optimized and resized if necessary with Gimp.


### 60 FPS Goal

+ I restructured the project, distributing the contents of the "views" folder to fit into the folder structure of the root, css, img and js folders.
+ I inlined all the css files between style tags in the head of the appropriate HTML files.
+ I moved all scripts to the bottom of the body.
+ I removed the Google font URL.
+ I created a "dist" folder for all my minified files to separate dev from production, creating a js and img subfolders.
+ I moved DOM queries out of loops where applicable.
+ I switched for loops to stored value cached versions where applicable.
+ I switch the number of moving pizzas from static to a value based on page height.
+ I Implemented CSS classes for pizza change sizes.
+
