import './Footer.css'
import footerImg from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-img">
                <img src={footerImg} alt="" />
            </div>
            <div className='container footer-container'>
                <div>
                    <h2>About Us</h2>
                    <p className='footer-description'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <ul className='social-link'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2>Subscribe</h2>
                    <p className='newslater-description'>Subscribe to our newsletter for the latest updates.</p>
                    <div>
                        <input className='newslater-field footer-newslater-field' placeholder="Enter Your Email" type="email" name="" id="" />
                        <button className='btn news-btn footer-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>@2025 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;