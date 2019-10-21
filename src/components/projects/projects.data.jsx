// images saved at 1200x800px
import imageOne from "../../assets/clothing-store.jpg";
import imageTwo from "../../assets/face-detection.jpg";
import imageThree from "../../assets/rsvp.jpg";
import imageFour from "../../assets/music-event.jpg";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Clothing Store",
    sub: "Built with React & Redux",
    image: imageOne,
    text:
      "An e-commerce website featuring navigation and routing, sign in and registration including Google signup, cart and checkout integrating Stripe payment API and utilising Firebase for authentication and storage.",
    live: "https://react-clothes-shop.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-clothing-store"
  },
  {
    id: 2,
    title: "Face Recognition",
    sub: "Built with React",
    image: imageTwo,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "https://photo-face-reveal.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-face-recognition"
  },
  {
    id: 3,
    title: "Music Event",
    sub: "Built with React",
    image: imageFour,
    text:
      "An event launch website utilising several react animation libraries and featuring a countdown to the event and side drawer navigation.",
    live: "http://striped-love.surge.sh/",
    source: "https://github.com/grahamcottridge/react-music-event"
  },
  {
    id: 4,
    title: "Event Organiser",
    sub: "Built with React",
    image: imageThree,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: "https://github.com/grahamcottridge/react-rsvp"
  }
];

export default PROJECT_DATA;
