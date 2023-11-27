import "./footer.css";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>JMEDIA </h3>
        <p>
          {" "}
          Your vision, my lens – Lets ignite the FOMO with every frame. 📸✨
        </p>

        <p>
          Whether you're an artist, venue, or event organizer feel free to reach
          out through my email or my social media for any inquiries, bookings,
          or just to say hello!
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <SocialIcon url="https://instagram.com" />
            </a>
          </li>
          <li>
            <a href="#">
              <SocialIcon url="https://tiktok.com" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">JMEDIA LLC</a>{" "}
        </p>
        {/* <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
