import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faq_items = [
    {
      id: "headingOne",
      controls: "collapseOne",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Do i need a KYC to participate in the presale + ?",
      details: `Acom.finance is a decentralized web3 +, you do not require verification of any sort to participate in presale and also to use any of our services.`,
    },
    {
      id: "headingTwo",
      controls: "collapseTwo",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "When will I get my $ACOM on my wallet?",
      details: `Acom will be listed at major CEX & DEX Exchanges Once the presales are Done. Acom Hodlers can Trade.`,
    },
    {
      id: "headingThree",
      controls: "collapseThree",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "When will the presale actually start?",
      details: `The presale will start on JULY 18th, 18:00 (UTC+1) on the following link:.`,
    },
    {
      id: "headingFour",
      controls: "collapseFour",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Is there a minimum amount that I need to invest?",
      details: `Yes, investors are required to invest at least 100 $ACOMSLV during the presale.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "I did not receive a confirmation email after I have sent token to the Unity address. Is that normal?",
      details: `Yes, it is totally fine! The payments will be checked thoroughly by our system in the following days. As long as you have sent the payment to the correct address, then there is no need to get worried.`,
    },
  ];

  return (
    <section id="faq" className="team-area">
      <div className="row justify-content-center pt-120">
        <div className="col-xl-6">
          <div className="section-title text-center mb-70">
            <span className="sub-title">FAQ</span>
            <h2 className="title">
              Frequently Asked <br /> <span>Questions</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container custom-container-four">
        <div className="faq-shape-wrap">
          <img src={"/img/images/faq_shape01.png"} alt="" className="img-one" />
          <img
            src={"/img/images/faq_shape02.png"}
            alt=""
            className="img-two rotateme"
          />
          <img
            src={"/img/images/faq_shape03.png"}
            alt=""
            className="img-three"
          />
        </div>

        <div className="row">
          <div className="col-lg-12">

            <div className="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion" id="accordionExample">
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
