# Starter for HTML/CSS/JS projects

Includes Gulp to compile Sass into CSS, along with Autoprefixer and Browser Sync.

## Setup

Before starting, you'll need [Node](https://nodejs.org/) (which includes NPM).

If using OSX, I'd recommend this guide to [getting set up with Node and NPM](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/).

Then install Gulp using `npm install -g gulp`. This installs Gulp globally and is needed later.

Clone this repo to your local computer using this command:

    git clone https://github.com/donSan4o/fapor.git

With the files downloaded, navigate to your `fapor` folder on the command line (or Terminal) and run `npm install` to set things up.

If that doesn't work, it may be necessary to use `sudo npm install`.

With this set up, you should now be able to run:

    gulp default

This will process any Sass (SCSS) files and launch a web browser showing the current files. Making changes to the files should result in the page updating automatically.
