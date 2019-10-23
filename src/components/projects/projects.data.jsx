// images saved at 1200x800px
import imageOne from "../../assets/clothing-store.jpg";
import imageTwo from "../../assets/face-detection.jpg";
import imageThree from "../../assets/rsvp.jpg";
import imageFour from "../../assets/music-event.jpg";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Clothing Store",
    sub: "Built with React, Redux and Firebase",
    image: imageOne,
    text:
      "An e-commerce website featuring navigation and routing, sign in and registration including Google signup, utilisation of Firebase for authentication and storage as well as a cart and checkout integrating Stripe payment API. Deployed to Heroku.",
    live: "https://react-clothes-shop.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-clothing-store"
  },
  {
    id: 2,
    title: "Face Recognition",
    sub: "Built with React, Express.js and Node.js, Postgres",
    image: imageTwo,
    text:
      "This application utilises an API to detect faces in pictures. It features a RESTful API server, session management with authenticated routes, stores user information and hashes passwords securely on a database with Postgres. Deployed to Heroku.",
    live: "https://photo-face-reveal.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-face-recognition"
  },
  {
    id: 3,
    title: "Music Event",
    sub: "Built with React",
    image: imageFour,
    text:
      "An static website utilising several React animation libraries and featuring a countdown and side drawer navigation. Deployed using Surge.",
    live: "https://dusty-knowledge.surge.sh",
    source: "https://github.com/grahamcottridge/react-music-event"
  },
  {
    id: 4,
    title: "Event Organiser",
    sub: "Built with React",
    image: imageThree,
    text:
      "An event organiser enabling guests to be inputed and divided into invited and confirmed.  Deployed to GitHub pages.",
    live: "",
    source: "https://github.com/grahamcottridge/react-rsvp"
  }
];

export default PROJECT_DATA;
