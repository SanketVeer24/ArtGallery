// CustomerForm.js
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import axios from "axios";

function EventRegister(props) {
  const [customer_name, setCustomerName] = useState("");
  const [customer_phone, setPhone] = useState("");
  const [customer_email, setEmail] = useState("");
  const [ticketQty, setTicketQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const ticketPrice = 100;
  const tax = 0.1878;

  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [formShow, setFormShow] = useState(true);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setTicketQty(newQuantity);
    setTotalPrice(newQuantity * ticketPrice + newQuantity * ticketPrice * tax);
  };

  const handleDateChange = (date) => {
    setExpiryDate(date);
  };

  useEffect(() => {
    setTotalPrice(ticketPrice + ticketPrice * tax);
  }, []);

  const handlePayment = async (event) => {
    if (
      isChecked &&
      customer_name !== "" &&
      customer_email !== "" &&
      customer_phone !== ""
    ) {
      setShowCreditCardForm(true);
    } else {
      if (customer_name === "") {
        alert("Please provide your name.");
      } else if (customer_email === "") {
        alert("Please provide your email.");
      } else if (customer_phone === "") {
        alert("Please provide your phone number.");
      } else {
        alert("Please accept the terms and conditions before proceeding.");
      }
    }
  };

  const handleBtnClk = async (event) => {
    if (
      cardName === "" ||
      cardNumber === "" ||
      expiryDate === "" ||
      cvv === ""
    ) {
      alert("Please enter your card details correctly.");
    } else {
      const formData = {
        customer_name,
        customer_email,
        customer_phone,
        ticketQty,
        totalPrice,
      };

      try {
        const response = await axios.post(
          "https://662056403bf790e070af94e0.mockapi.io/eventregister",
          formData
        );
        setFormShow(false);
        console.log("Form submitted successfully", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
      console.log("Checkbox is checked. Proceeding to the next page...");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div id="registerFormContainer">
        {formShow && (
          <form
            onSubmit={handleSubmit}
            id="customerRegisterForm"
            className="customerForm"
          >
            <h1 className="customerRegisterFromHeader">
              {" "}
              Register for Events{" "}
            </h1>
            <fieldset>
              <legend>
                <span class="number">1</span> Your Basic Info
              </legend>

              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={customer_name}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />

              <label for="customer_email">Email:</label>
              <input
                type="email"
                id="customer_email"
                name="customer_email"
                value={customer_email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label for="customer_email">Phone:</label>
              <input
                type="tel"
                id="customer_phone"
                name="user_phone"
                value={customer_phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">2</span> Tickets
              </legend>
              <label for="ticketQty">How Many?</label>
              <select
                name="ticket"
                id="ticketQty"
                value={ticketQty}
                onChange={handleQuantityChange}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div id="totalPriceContainer">
                <div>
                  <h2 id="totalPrice">
                    Total: <span id="totalPrice">${totalPrice}</span>
                  </h2>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">3</span> Terms & Conditions
              </legend>
              <input
                type="checkbox"
                id="tandc"
                value="tandc"
                name="termsandconditions"
                onChange={(e) => setIsChecked(e.target.value)}
              />
              <label class="light" for="tandc" required>
                I understand the{" "}
                <a
                  href="https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf"
                  _target="blank"
                >
                  Terms & Conditions
                </a>
              </label>
            </fieldset>

            <br />
            {!showCreditCardForm && (
              <button onClick={handlePayment} className="registerBtn">
                Proceed to Payment
              </button>
            )}
            {showCreditCardForm && (
              <div id="paymentFormContainer">
                <hr className="separator" />
                <fieldset>
                  <h1 className="customerRegisterFromHeader">
                    {" "}
                    Payment Details{" "}
                  </h1>
                  <div>
                    <label htmlFor="cardName">Name on Card:</label>
                    <input
                      type="text"
                      id="cardName"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <DatePicker
                      selected={expiryDate}
                      onChange={handleDateChange}
                      dateFormat="MM/dd/yyyy"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV:</label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleBtnClk}
                    className="registerBtn"
                  >
                    Complete Payment
                  </button>
                </fieldset>
              </div>
            )}
          </form>
        )}
        {!formShow && (
          <div id="confirmationWidget">
            <div className="confirmationMsgContainer">
              <h1>
                Thank you for registering! <br />
                <br />
                You should recieve your ticket to the given phone and email.{" "}
                <br />
                See you soon!
              </h1>
            </div>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default EventRegister;
