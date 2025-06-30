import React from "react";
import "../style/footer.css";
import logo from "../assets/logo-2.png";
const Footer = () => {
  return (
    <>
        <footer class="footer">
        <div class="footer-content">
            <div class="footer-section footer-brand">
                <img src={logo} alt="" srcset="" />
                <p>Creating amazing digital experiences with cutting-edge technology. We help businesses transform their ideas into successful products.</p>
                <div class="social-links">
                    <a href="#" class="social-link">📘</a>
                    <a href="#" class="social-link">🐦</a>
                    <a href="#" class="social-link">📷</a>
                    <a href="#" class="social-link">💼</a>
                </div>
            </div>

            <div class="footer-section">
                <h3>Company</h3>
                <ul class="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#team">Our Team</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#press">Press</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Services</h3>
                <ul class="footer-links">
                    <li><a href="#web-design">Web Design</a></li>
                    <li><a href="#development">Development</a></li>
                    <li><a href="#marketing">Marketing</a></li>
                    <li><a href="#consulting">Consulting</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Support</h3>
                <ul class="footer-links">
                    <li><a href="#help">Help Center</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#documentation">Documentation</a></li>
                    <li><a href="#community">Community</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Newsletter</h3>
                <div class="newsletter">
                    <p>Subscribe to our newsletter for the latest updates and news.</p>
                    <form class="newsletter-form">
                        <input type="email" class="newsletter-input" placeholder="Enter your email" required/>
                        <button type="submit" class="newsletter-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="footer-content">
            <div class="footer-bottom">
                <p>&copy; 2025 ModernWeb. All rights reserved.</p>
                <ul class="footer-bottom-links">
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
