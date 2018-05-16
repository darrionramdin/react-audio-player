##Introduction
This personal project is a simple web application built using React and the HTML Audio Element.

##Installation
1. npm install
2. npm start

## Description
This a simple web application built using React and the HTML Audio Element. It was bootstrapped using create-react-app.

The songs are are loaded using the audio element via external urls that end with .mp3 along with its name, the singer's name, a url and a album cover image. It uses state to change between songs based on which song was clicked, injecting the provided url into the src of the audio component.

The songs are located in the song.js file in the src directory and are mapped over in the application to produce the various single song component which holds all the information for the song.

During this, I was able to work with various component lifecycles and learn more about refs in React.

Other ideas I had during this project was to add the ability to search through the tracks, add your own songs, navigation controls and autoplay. I decided to keep this minimal and will implement this is another music app project, most likely a larger one.