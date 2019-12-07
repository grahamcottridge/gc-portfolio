// images saved at 1200x800px
import imageOne from "../../assets/clothing-store.jpg";
import imageTwo from "../../assets/face-detection.jpg";
import imageThree from "../../assets/react-movie.jpg";
import imageFour from "../../assets/music-event.jpg";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Clothing Store",
    sub: "Built with React, Redux and Firebase",
    image: imageOne,
    text:
      "An e-commerce website featuring navigation and routing, sign in and registration including Google signup, utilisation of Firebase for authentication and storage as well as a cart and checkout integrating Stripe payment API.  Deployed to Heroku.",
    live: "https://react-clothing-shop.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-clothing-store-saga"
  },
  {
    id: 2,
    title: "Movie Database",
    sub: "Built with React",
    image: imageThree,
    text:
      "This application utilises an API to search for movie information. It features custom-built React Hooks for state and side effects as well as persisting state in local and session storage.",
    live: "https://react-movies-db.netlify.com/",
    source: "https://github.com/grahamcottridge/react-moviedb"
  },
  {
    id: 3,
    title: "Face Recognition",
    sub: "Built with React, Express.js and Node.js, Postgres",
    image: imageTwo,
    text:
      "This application utilises an API to detect faces in pictures. It features a RESTful API server, session management with authenticated routes, stores user information and hashes passwords securely on a database with Postgres.  Deployed to Heroku. Why not register and try it for yourself?",
    live: "https://photo-face-reveal.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-face-recognition"
  },
  {
    id: 4,
    title: "Music Event",
    sub: "Built with React",
    image: imageFour,
    text:
      "A static website utilising several React animation libraries and featuring a countdown, integration with Google maps and side drawer navigation. Deployed to GitHub pages.",
    live: "https://grahamcottridge.github.io/react-music-event",
    source: "https://github.com/grahamcottridge/react-music-event"
  }
];

export default PROJECT_DATA;
