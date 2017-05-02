# Project 2 Client

## Overview
WanderList is a Single Page Application that allows a user to create a list of
city destinations they would like to visit.

## User stories
As a user I want to be able to:
-   create an account
-   sign into my account so I can create a list of cities
-   add a city to my list
-   view all cities on my list
-   remove a city from my list
-   update information about a city on my list
-   change my password
-   sign out of my account so my list is no longer visible

## Wireframes
[Imgur](http://i.imgur.com/mUv0GiT.jpg)

## Technologies Used
-   HTML
-   CSS
-   jQuery
-   AJAX
-   JavaScript
-   Handlebars.js
-   Bootstrap

## Planning and Development
Tentative timetable:
1. Create user stories and wireframes (~2 hours)
2. Create database table design (~3 hours)
3. Create simple UI using HTML/CSS/bootstrap (1 day)
4. Create API backend (3 days)
5. Create front end/client (2 days)

I initially thought it would take me longer to build the backend API but I ended
up struggling the most with implementing the UPDATE feature through the client.
I was surprised I didn't encounter many issues writing the curl scripts to confirm
changes in the database and completed the CRUD actions on the backend in less
than 3 days.

Due to time constraints I was not able to implement a third table - Trip. This
would enable a user to create multiple Trips, each containing one to many cities.

I encountered issues with retrieving modal information that was created using
the handlebars template. Due to this I require users to close the modal and
click 'View Cities' in order to see the updates as well as make updates to other
city entries.

## Link to API repository
https://github.com/vanduong28/project-2-trip-list-API

## URL
https://vanduong28.github.io/project-2-trip-list-client/

## Future Enhancements
I would like to be able to automatically update the list of cities after a user
creates a city. Currently a user is required to click 'View Cities' to see the
updated list. In addition I would like to incorporate this functionality upon
a successful update of a city entry.

## Installation
1. Install with 'npm install'.
2. Start with 'grunt serve'.
