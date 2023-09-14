import amex from "../IMG/amex.png";
import applePay from "../IMG/apple-pay.png";
import googlePay from "../IMG/googlePay.png";
import masterCard from "../IMG/masterCard.png";
import visa from "../IMG/visa.png";
import payPal from "../IMG/paypal .png";
import email from "../IMG/mail-inbox-app.png";
import meta from "../IMG/meta.png";
import instagram from "../IMG/instagram.png";
import youtube from "../IMG/youtube.png";
import x from "../IMG/x.png";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="first-block-footer">
        <h3 className="footer-head">Information</h3>
        <p>ABOUT US</p>
        <p>CONTACT US</p>
        <p>CAREERS</p>
        <p>WHOLESALE</p>
        <p>CHECK OUT OUR BLOG</p>
        <p>DELIVERY & SHIPPING POLICY</p>
        <p>REFUND & RETURN POLICY</p>
        <p>TERMS AND CONDITIONS</p>
      </div>

      <div className="second-block-footer">
        <p>Amm Wines Ltd</p>
        <p>77 Hemiguaway Street</p>
        <p>Salford, Lancashire, AA3 6BB, UK</p>
        <p>01234 567899</p>
        <p>sales@test.co.uk</p>
        <p>Monday - Saturday: 10:00 to 17:00</p>
        <p>Sunday: Closed</p>
      </div>

      <div className="third-block-footer">
        <h4 className="footer-head">Follow us on</h4>
        <img src={email} className="email" alt="email" width="40" height="40" />
        <img src={meta} className="meta" alt="meta" width="40" height="40" />
        <img src={x} className="x" alt="x" width="40" height="40" />

        <img
          src={instagram}
          className="instagram"
          alt="instagram"
          width="40"
          height="40"
        />
        <img
          src={youtube}
          className="youtube"
          alt="youtube"
          width="40"
          height="40"
        />
      </div>

      <div className="fourth-block-footer">
        <h4 className="footer-head">We work with</h4>
        <img
          src={masterCard}
          className="masterCard"
          alt="masterCard"
          width="40"
          height="40"
        />
        <img src={visa} className="visa" alt="visa" width="40" height="40" />
        <img src={amex} className="amex" alt="amex" width="40" height="40" />
        <img
          src={payPal}
          className="payPal"
          alt="payPal"
          width="40"
          height="40"
        />

        <img
          src={applePay}
          className="applePay"
          alt="applePay"
          width="40"
          height="40"
        />
        <img
          src={googlePay}
          className="googlePay"
          alt="googlePay"
          width="40"
          height="40"
        />
      </div>
    </div>
  );
};

export default Footer;
