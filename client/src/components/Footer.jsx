import '../styles/Footer.css';
import FooterLogo from '../images/Footer_logo.svg';

function Footer() {
  return (
    <footer className='footer'>

      <div className="footer-logo">
        <img src={FooterLogo} alt="3QQ logo" />
      </div>

      <div className="footer-right-content">

        <div className="footer-rights">
        3 QUESTIONS QUIZ © 2024. All rights reserved.
        </div>

        <div className="footer-items">
          <div>Online Policies</div>
          <div>Impressium</div>
          <div>About Cookies</div>
          <div>Data Subject</div>
          <div>Access Request Portal</div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
