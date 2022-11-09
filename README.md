
# RecLeague-client

RecLeague is a web app that makes it easy to find, join, and manage recreational sports leagues. RecLeague makes use of the Google Maps API, as well as the custom RecLeague-server API, and recleague database.

Note: This app needs the [RecLeague-server](https://github.com/cameronmakarchuk/recleague-server), and RecLeague mySQL database (setup instructions in RecLeague-server README).


## Features

- Fully responsive design
- Search leagues by city and sport
- Get league details for specific leagues
- Create/edit user profile
- Create/edit leagues as league manager
- Join leagues as a user
- View users who have joined the leagues you manage



## Tech Stack

**Client:** HTML/CSS, JavaScript, React, Sass, axios

**Server:** Node.js, Express,js, axios, JWT, Knex.js

**Database:** SQL/MySQL
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_SERVER_URL` - this will be the URL for RecLeague-server. A default is set unless you change the server settings.

`REACT_APP_GOOGLE_MAPS_API_KEY` - RecLeague utilizes the Google Maps Static API and requires a Google Maps API Key. [You can sign up for one here.](https://developers.google.com/maps)




## Run Locally

Clone the project

```bash
  git clone git@github.com:cameronmakarchuk/recleague-client.git
```

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start React development server

```bash
  npm start
```


## Lessons Learned

Through building RecLeague-client I learned a lot about using JWT for user authentication and authorization on the client and server side.

I also learned that it's better to start small and build up, rather than setting unrealistic expectations from the start.
## Roadmap

- Improve search functionality
- Implement client and server side form validation
- Add "Teams" functionality. See which teams have openings, and message teams directly
- Integrate Stripe API for checkout and payment processing
- Build out a league admin dashboard


## Authors

- [@cameronmakarchuk](https://www.github.com/cameronmakarchuk)

