import "../Styles/Footer.css";
import amex from "../IMG/amex.png";
import applePay from "../IMG/apple-pay.png";
import googlePay from "../IMG/googlePay.png";
import masterCard from "../IMG/masterCard.png";
import visa from "../IMG/visa.png";
import payPal from "../IMG/paypal.png";
import email from "../IMG/mail-inbox-app.png";
import meta from "../IMG/meta.png";
import instagram from "../IMG/instagram.png";
import youtube from "../IMG/youtube.png";
import x from "../IMG/x.png";

const Footer = () => {
  const infoLinks = [
    "About us",
    "Contact us",
    "Careers",
    "Wholesale",
    "Blog",
    "Delivery & shipping policy",
    "Refund & return policy",
    "Terms and conditions",
  ];

  const socialIcons = [
    { src: email, alt: "Email", className: "email" },
    { src: meta, alt: "Facebook", className: "meta" },
    { src: x, alt: "X (Twitter)", className: "x" },
    { src: instagram, alt: "Instagram", className: "instagram" },
    { src: youtube, alt: "YouTube", className: "youtube" },
  ];

  const paymentIcons = [
    { src: masterCard, alt: "MasterCard", class: "masterCard" },
    { src: visa, alt: "Visa", class: "visa" },
    { src: amex, alt: "American Express", class: "amex" },
    { src: payPal, alt: "PayPal", class: "payPal" },
    { src: applePay, alt: "Apple Pay", class: "applePay" },
    { src: googlePay, alt: "Google Pay", class: "googlePay" },
  ];

  return (
    <footer className="footer-container">
      <section className="footer-section-info">
        <h3 className="footer-head">Information</h3>
        {/* <p>ABOUT US</p>
        <p>CONTACT US</p>
        <p>CAREERS</p>
        <p>WHOLESALE</p>
        <p>CHECK OUT OUR BLOG</p>
        <p>DELIVERY & SHIPPING POLICY</p>
        <p>REFUND & RETURN POLICY</p>
        <p>TERMS AND CONDITIONS</p> */}
        {infoLinks.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </section>

      <div className="footer-section-address">
        <p>Amm Wines Ltd</p>
        <p>77 Hemiguaway Street</p>
        <p>Salford, Lancashire, AA3 6BB, UK</p>
        <p>01234 567899</p>
        <p>sales@test.co.uk</p>
        <p>Monday - Saturday: 10:00 to 17:00</p>
        <p>Sunday: Closed</p>
      </div>

      <section className="footer-section-social">
        <h4 className="footer-head">Follow us on</h4>

        {socialIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            className={icon.className}
            alt={icon.alt}
            width="40"
            height="40"
          />
        ))}
      </section>

      <section className="footer-section-payments">
        <h4 className="footer-head">We work with</h4>

        {paymentIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className={icon.class}
          />
        ))}
      </section>
    </footer>
  );
};

export default Footer;
