# Tapico-Technical-Assessment
Technical Test for Tapico

## Brief
Using an object-oriented programming language, preferably javascript or typescript, write an application that subscribes to three or more APIs.

Your application must allow the consumed APIs, or any stored data drawn from those APIs, to be queried by the actions of an end-user. This should be via your application’s own exposed API.

For example, you might subscribe to several social media APIs and allow a user to select a location and view trends in the area.

Publicly available APIs, which you might choose from, can be found here: https://github.com/public-apis/public-apis

## My Approach
I took it upon myself to allocate myself between 4-5 hours for completing this assessment. Unfortunately due to personal matters, these hours were spread across multiple days and I found I had over run the time I permitted myself.

I decided to utilise multiple news APIs which included 'NEWSAPI' and 'New York Times API'. The idea was to curate top headlines from multiple reputable sources into one article card feed layout.


I started by extensively assessing the datasets provided by the APIs to determine common keys such as 'title', 'description' and 'url' for where the articles could be read. I also opted to use the 'url' for each article as its unique identifier in the combined dataset array going forward.

Following this I proceeded by setting up a React, Node, Express, Webpack file to start the project as a new app. From there I was off, planning my components and deciding on how to display the dataset.

## Local Deployment

Download or clone the repository to your local machine from github

## Instructions to run:
To install dependencies, from the project root folder:

```
$ npm install
```
OR

```
$ yarn
```

Then run back-end server:

```
$ npm run serve:back
```
OR

```
$ yarn serve:back
```

Then run front-end server:

```
$ npm run serve:front
```
OR

```
$ yarn serve:front
```


If the dev server doesnt open your browser automatically, launch the localhost and it will be ready to use.

## How it works
Once the project has loaded, the user will be presented with an array of current headlines in individual card layouts. There is also a search bar from which a user can retrieve their preferred choice of news articles. The user can digest the article headlines or click a card to be directed to the full article.

## Key Features

I demonstrated use of many different parts of my Node JS, Express JS and React capability including multiple components, conditional rendering, simultaneous axios requests and third-party styling libraries (bulma). 

## Future improvements
Unfortunately due to time constraints I was unable to implement a more thorough search element to the APIs large collection of articles. In addition to this I would look to integrate a categories filter for narrowing down the selection of articles being returned from the APIs.


## Bugs
Initially ran into a lot of trouble with CORS which took a chunk of my time. It required me to modify my Webpack config to handle proxy requests to the API
through my own Express JS server 

i.e. Frontend GET Request ===> Express JS Backend Server ===> Third-party API which sends Response ===> Express JS Backend Server ===> React Frontend.