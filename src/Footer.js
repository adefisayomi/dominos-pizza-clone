import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Footer.css";
function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <Link className="footer__navLink footer__navLink1">
            International
          </Link>
          <Link className="footer__navLink footer__navLink2">About Pizza</Link>
          <Link className="footer__navLink footer__navLink3">FAQ</Link>
          <Link className="footer__navLink footer__navLink4">Contact Us</Link>
        </nav>
        <div className="footer__imageSection">
          <div className="footer__social">
            <Link className="footer__facebookContainer">
              <FacebookIcon className="footer__facebook" />
            </Link>
            <Link className="footer__twitterContainer">
              <TwitterIcon className="footer__twitter" />
            </Link>
          </div>
          <div className="footer__bannersContainer">
            <img
              className="footer__banners"
              src="https://cache.dominos.com/olo/6_34_5/assets/build/market/NG/_en/images/img/footer-links/interswitch.png"
              alt=""
            />
          </div>
        </div>
        <div className="footer__deliveryNote">
          <p className="footer__deliveryNoteUp">
            Delivery Guarantee: A minimum order of{" "}
            <strong className="footer__naira">N3000</strong> is required to
            qualify for free delivery. FREE delivery applies to predetermined
            areas around each Domino’s outlet. Please ask your closest Domino’s
            Pizza outlet if you fall within their specified delivery area. Our
            Delivery Experts are not penalized for late deliveries.{" "}
            <Link onClick={handleShow} className="footer__moreInfo">
              <span> Click here for more information.</span>
            </Link>
          </p>
          <p className="footer__deliveryNoteBottom">
            The hours of operation may vary by store. Valid for the Delivery
            Service and Carry-Out of Domino's Pizza Nigeria stores. Domino´s
            Pizza reserves the right to make unannounced price changes. Our
            delivery experts provide change up to N7500. Please note that checks
            or bank transfers, are not accepted as payment method. The data
            provided by customers will be included in the user and promotional
            database, owned by Eat N Go Ltd. Prices include VAT & other Taxes.
          </p>
        </div>
      </div>
      <>
        {/* Modal section with Default value of (HIDE)------------------------------------------------------------ */}
        <Modal
          className="footer__modal"
          show={show}
          onHide={handleClose}
          animation={false}
          backdrop="static"
          scrollable="true"
        >
            <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="footer__modalBody">
            <h2 className= "footer__modalh2">TERMS OF USE</h2>
            <h4 className= "footer__modalh4">Acceptance of Terms</h4>{" "}
            <p>
              By ticking the relevant box during the registration process the
              Guest agrees to be bound by these Terms and Conditions.{" "}
            </p>
            <p>
              <strong>
                Given the lack of human factor intervention in sending and
                receiving the order via the Internet (online), it is necessary
                to take in mind the following terms before entered your details
                and / or your order. Please read carefully!
              </strong>
            </p>
            <p> ➤ The minimum standards that must be your browsers (browsers) to
                order through our website is: Internet Explorer 7, Mozilla
                Firefox 2 , Safari 4 or later enabled the performance
                JavaScript.{" "}
              </p>
              <p>
              ➤ Orders paid by credit card are charged directly from your bank
                account. For security reasons Domino’s Pizza Nigeria has no
                access to your credit card.
              </p>
              <p>
              ➤ changing or cancelling the order after sending is NOT accepted.{" "}
              </p>
              <p>
              ➤ In the menu list, removing any topping from the pizza does not
                change the price of the pizza but adding any topping attracts a
                fee.
              </p>
              <p>➤ Minimum order value =N=3000 for Delivery. </p>
              <p>
              ➤ The high value orders and contact information of customers who
                order for the first time may be confirmed by telephone. For this
                reason, please indicate on your online order the delivery
                address phone so we can call you back to confirm.{" "}
              </p>
              <p>
              ➤ Domino’s Pizza Nigeria cannot guarantee the uninterrupted
                operation of <Link to="/">www.dominos.ng</Link> and bears no
                responsibility for any technical failure or any other use of {" "}
                <Link to="/">www.dominos.ng</Link>
              </p>
            <h4 className= "footer__modalh4">Terms deals</h4>
            <p>
              The selection of offers made through the Deals section of the site
              and may not be combined with other offers unless otherwise
              specified by the terms of the offer.
            </p>
            <h4 className= "footer__modalh4">Protection of Personal Data</h4>
            <p>
              The use of the services provided by the
              <Link to="/">www.dominos.ng</Link>, including online order service
              of Domino's Pizza Nigeria products necessitates communication
              possibility with you. It is therefore necessary when you sign it
              to indicate the truth when filling in your data requested such as
              name, email address, mailing address and telephone number. By
              enrolling in <Link to="/">www.dominos.ng</Link> and the
              introduction of the requested data you consent to the collection,
              use and processing of your personal data voluntarily entered for
              the purposes disclosed below.
            </p>
            <p>
              Domino’s Pizza Nigeria collects and maintains only the personal
              information you disclose in the introduction of your requested
              information in the appropriate fields and / or responses in
              specific actions carried out by Domino's and you voluntarily
              participate.
            </p>
            <p>
              The Purpose of the collection, use and processing of your personal
              data you provide to the company, is to provide the services and
              products you request via the website, for the reception of which
              requires the use and / or processed eg online orders and the sale
              and promotion of products and services offered by the Domino's
              Pizza Nigeria, particularly through{" "}
              <Link to="/">www.dominos.ng</Link>
            </p>
            <p>
              Domino's Pizza Nigeria has the right to use the contact details
              that are known for sending information messages about products and
              services and relevant offers and / or communications.
            </p>{" "}
            <p>
              Access to personal data is permitted only to authorized persons
              who require access in order to enable the completion of the
              purpose of the collection, use and processing, as is acknowledged
              by these terms. In this context, the Domino's Pizza Nigeria
              reserves the right to provide authorized access and / or right to
              use and processing of your personal data to third legal or natural
              persons involved in the execution of the processing as assigned.
            </p>
            <p>
              Domino's Pizza Nigeria reserves the right to use the information
              which you disclose through <Link to="/">www.dominos.ng</Link> in a
              manner that does not enable the identification or disclosure of
              the person whom they concern, for statistical, promotional,
              research or promotional purposes, disclosing these and third
              parties eg research companies responsible for the completion of
              the above objectives.
            </p>
            <p>
              Domino's Pizza Nigeria reserves the right to amend these terms and
              conditions by posting them in <Link to="/">www.dominos.ng</Link>{" "}
            </p>
            <p>
              Subscribing to and / or using the services provided via{" "}
              <Link to="/">www.dominos.ng</Link> signifies an unconditional
              acceptance of these terms of use.
            </p>
          </Modal.Body>
        </Modal>
      </>
      {/* End of Modal section------------------------------------------------------------ */}
    </div>
  );
}

export default Footer;
