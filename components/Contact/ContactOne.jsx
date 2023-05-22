import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          sales@acom.finance <br /> projects@acom.finance
        </>
      ),
    },
    {
      icon: "fa-envelope",
      content: (
        <>
          <a href={"http://t.me/weareacom"}  target="_blank"> Telegram: t.me/weareacom </a>
        </>
      ),
    },
    {
      icon: "fa-envelope",
      content: (
        <>
          <a href={"http://twitter.com/@acomunitycom"}  target="_blank"> Twitter: twitter.com/@acomunitycom </a>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Contact</span>
              <h2 className="title">
                <span>Contact</span> ACOM FINANCE Team

              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div>

        {/* section form */}
        <ContactOneForm />
      </div>
    </section>
  );
};

export default ContactOne;
