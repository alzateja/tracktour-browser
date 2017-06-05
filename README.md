[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Capstone Project

## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

I have a project idea is an app that lets people select artists that they want to see in concert.  If I had a longer timeframe, I would work on letting users track shows they have been two and put together a wishlist of artists.  The app will then let them know when someone they like is coming into town.


## How does it work?
A user creates an account and searches for artist to add to their wishlist.  They are then able to select if they have see them.  Future state, I would like them to be able to record where they saw them using a 3rd part concert api.  They can then mark whether they have seen
this artist.


## Write between 3-5 user stories

* As a user, I want an intuitive application that is easy to navigate
* As a user, I want a system where I can search for artist
* As a user, I want to know when one of my artists in coming to visit town.

## Plan your tables and columns

What tables will you need? What will the columns on the table be?

Concert {
Artist_id: ,
user_id: ,
status: ,
last_seen
}



Artist {
artist_name:
}

User {
Email:
Password: ,
Name:
}

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another.
(one to many, many to many, ect).

###Inital ERD
See ERD- Tracktour.png


## Routing

What routes will you need to be able to make the proper request to your API?

3 routes :
1) user-auth
2) artists
3) concerts

## 3rd Party APIs

Do you plan to use any, if so what are they?

Songkick

## Wireframes

Please create a wireframe of your planned front end.

###Landing Page
See Tracktour - wireframe- landing page.png


###Tracking Info
See Tracktour - Concert tracking page.png


## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

* June 5 - Initial commits and Authorization
* June 6 - API and Basic Front End
* June 7 - 3rd party API (if possible)
* June 8 - 9 - Front end framework (if possible)

## Link to Live application



## Link to Rails API github

https://github.com/alzateja/tracktour-rails-api

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
