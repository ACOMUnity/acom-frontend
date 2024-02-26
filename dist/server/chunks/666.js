"use strict";
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 3556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Faq_Faq)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Faq/FaqItem.jsx



const FaqItem = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "accordion-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "accordion-header",
                id: props.item.id,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: external_classnames_default()("accordion-button", props.item.btnClass),
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": `#${props.item.controls}`,
                    "aria-expanded": props.item.expanded,
                    "aria-controls": props.item.controls,
                    children: props.item.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: props.item.controls,
                className: external_classnames_default()("accordion-collapse collapse", props.item.contentClass),
                "aria-labelledby": props.item.id,
                "data-bs-parent": "#accordionExample",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "accordion-body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.item.details
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Faq_FaqItem = (FaqItem);

;// CONCATENATED MODULE: ./components/Faq/Faq.jsx



const Faq = ()=>{
    const faq_items = [
        {
            id: "headingOne",
            controls: "collapseOne",
            expanded: false,
            btnClass: "collapsed",
            contentClass: "",
            title: "Do i need a KYC to participate in the presale + ?",
            details: `Acom.finance is a decentralized web3 +, you do not require verification of any sort to participate in presale and also to use any of our services.`
        },
        {
            id: "headingTwo",
            controls: "collapseTwo",
            expanded: false,
            btnClass: "collapsed",
            contentClass: "",
            title: "When will I get my $ACOM on my wallet?",
            details: `Acom will be listed at major CEX & DEX Exchanges Once the presales are Done. Acom Hodlers can Trade.`
        },
        {
            id: "headingThree",
            controls: "collapseThree",
            expanded: false,
            btnClass: "collapsed",
            contentClass: "",
            title: "When will the presale actually start?",
            details: `The presale will start on JULY 18th, 18:00 (UTC+1) on the following link:.`
        },
        {
            id: "headingFour",
            controls: "collapseFour",
            expanded: false,
            btnClass: "collapsed",
            contentClass: "",
            title: "Is there a minimum amount that I need to invest?",
            details: `Yes, investors are required to invest at least 100 $ACOMSLV during the presale.`
        },
        {
            id: "headingFive",
            controls: "collapseFive",
            expanded: false,
            btnClass: "collapsed",
            contentClass: "",
            title: "I did not receive a confirmation email after I have sent token to the Unity address. Is that normal?",
            details: `Yes, it is totally fine! The payments will be checked thoroughly by our system in the following days. As long as you have sent the payment to the correct address, then there is no need to get worried.`
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "faq",
        className: "team-area",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center pt-120",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-xl-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-title text-center mb-70",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sub-title",
                                children: "FAQ"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "title",
                                children: [
                                    "Frequently Asked ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Questions"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container custom-container-four",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "faq-shape-wrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/images/faq_shape01.png",
                                alt: "",
                                className: "img-one"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/images/faq_shape02.png",
                                alt: "",
                                className: "img-two rotateme"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/images/faq_shape03.png",
                                alt: "",
                                className: "img-three"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "faq-wrap wow fadeInUp",
                                "data-wow-delay": ".2s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "accordion",
                                    id: "accordionExample",
                                    children: faq_items.map((x, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Faq_FaqItem, {
                                            item: x
                                        }, index))
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Faq_Faq = (Faq);


/***/ }),

/***/ 6209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ handleClickScroll),
/* harmony export */   "k": () => (/* binding */ scrollToTop)
/* harmony export */ });
const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const handleClickScroll = (id)=>{
    const element = document.getElementById(id);
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({
            behavior: "smooth"
        });
    }
};


/***/ })

};
;