import React from "react";
import "../style/footer.css";
import logo from "../assets/logo-2.png";
const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section footer-brand">
                <img src={logo} alt="" srcSet="" />
                <p>Creating amazing digital experiences with cutting-edge technology. We help businesses transform their ideas into successful products.</p>
                <div className="social-links">
                    <a href="#" className="social-link">📘</a>
                    <a href="#" className="social-link">🐦</a>
                    <a href="#" className="social-link">📷</a>
                    <a href="#" className="social-link">💼</a>
                </div>
            </div>

            <div className="footer-section">
                <h3>Company</h3>
                <ul className="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#press">Press</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Services</h3>
                <ul className="footer-links">
                    <li><a href="#web-design">Web Design</a></li>
                    <li><a href="#development">Development</a></li>
                    <li><a href="#marketing">Marketing</a></li>
                    <li><a href="#consulting">Consulting</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Support</h3>
                <ul className="footer-links">
                    <li><a href="#help">Help Center</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#documentation">Documentation</a></li>
                    <li><a href="#community">Community</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Newsletter</h3>
                <div className="newsletter">
                    <p>Subscribe to our newsletter for the latest updates and news.</p>
                    <form className="newsletter-form">
                        <input type="email" className="newsletter-input" placeholder="Enter your email" required/>
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="footer-content">
            <div className="footer-bottom">
                <p>&copy; 2025 ModernWeb. All rights reserved.</p>
                <ul className="footer-bottom-links">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#cookies">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;
