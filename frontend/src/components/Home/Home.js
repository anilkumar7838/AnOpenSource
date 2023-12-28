import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import Ind from "../../assets/images/ind.png";
import Usa from "../../assets/images/usa.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DoneAllIcon from '@mui/icons-material/DoneAll';
import Navbar from "../views/Navbar/Navbar";
import Footer from "../views/footer/footer"

const Home = () => {
  const bottomRightData = [
    {
      data: "Online Banking",
      content: [
        {
          title: "24/7 Account Access",
          description:
            "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
        },
        {
          title: "Mobile Banking App",
          description:
            "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
        },
        {
          title: "Secure Transactions",
          description:
            "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
        },
        {
          title: "Bill Pay and Transfers",
          description:
            "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
        },
      ],
    },
    {
      data: "Financial Tools",
      content: [
        {
          title: "24 Account Access",
          description:
            "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
        },
        {
          title: "Mobile Banking App",
          description:
            "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
        },
        {
          title: "Secure Transactions",
          description:
            "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
        },
        {
          title: "Bill Pay and Transfers",
          description:
            "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
        },
      ],
    },
    {
      data: "Customer Support",
      content: [
        {
          title: "7 Account Access",
          description:
            "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
        },
        {
          title: "Mobile Banking App",
          description:
            "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
        },
        {
          title: "Secure Transactions",
          description:
            "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
        },
        {
          title: "Bill Pay and Transfers",
          description:
            "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(bottomRightData[0]);

  const carouselContent = [
    {
      title: "Consult about Your Project",
      expert: "with our expert",
      cost: "Free of Cost",
    },
    {
      title: "Brand posting",
      expert: "Manjot Kanojia",
      cost: "$32",
    },
    {
      title: "Development & coding",
      expert: "D. Prakash",
      cost: "$60",
    },
  ];

  const products = [
    {
      icon: <AddCircleIcon className="home-section2-bottom-icons" />,
      title: "Mobile Apps",
      description:
        "Our mobile apps are meticulously crafted to address individual needs, delivering unparalleled convenience, productivity enhancements, and a dash of entertainment, all within your fingertips.",
    },
    {
      icon: <AddCircleIcon className="home-section2-bottom-icons" />,
      title: "Personal Websites",
      description:
        "Elevate your online identity with our personalized website solutions. Perfect for displaying portfolios or establishing a distinctive online presence, our tailored websites are designed to captivate and engage your audience.",
    },
    {
      icon: <AddCircleIcon className="home-section2-bottom-icons" />,
      title: "Loans and Mortgages",
      description:
        "Experience hassle-free functionality with our remote tech support services. Our expert team provides seamless assistance to troubleshoot device and software issues, ensuring your technology operates flawlessly from wherever you are.",
    },
  ];

  const initialVisibleFAQs = 4; // Number of FAQs initially visible
  const [visibleFAQs, setVisibleFAQs] = useState(initialVisibleFAQs);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const faqs = [
    {
      question: "What does AnOpenSource specialize in?",
      answer:
        "AnOpenSource is dedicated to providing comprehensive open-source technology solutions, offering an array of services and products centered around open-source software and principles. Our focus lies in harnessing the power of open-source technologies to meet diverse technological needs.",
    },
    {
      question:
        "How does AnOpenSource differentiate itself from other IT firms?",
      answer:
        "We set ourselves apart by prioritizing the adoption and utilization of open-source technologies, valuing their flexibility, transparency, and collaborative nature. This approach allows us to craft innovative solutions that align with client needs.",
    },
    {
      question:
        "What open-source technologies does AnOpenSource specialize in?",
      answer:
        "AnOpenSource has expertise in a multitude of open-source technologies such as Linux, Apache, MySQL, Python, PHP, WordPress, and more. Moreover, we actively contribute to and engage with open-source communities to foster growth and innovation.",
    },
    {
      question: "What industries does AnOpenSource cater to?",
      answer:
        "We serve diverse industries, including healthcare, finance, education, e-commerce, manufacturing, and more. Our solutions are tailored to address specific sector requirements and challenges.",
    },
    {
      question: "What does AnOpenSource specialize in?",
      answer:
        "AnOpenSource is dedicated to providing comprehensive open-source technology solutions, offering an array of services and products centered around open-source software and principles. Our focus lies in harnessing the power of open-source technologies to meet diverse technological needs.",
    },
    {
      question:
        "How does AnOpenSource differentiate itself from other IT firms?",
      answer:
        "We set ourselves apart by prioritizing the adoption and utilization of open-source technologies, valuing their flexibility, transparency, and collaborative nature. This approach allows us to craft innovative solutions that align with client needs.",
    },
    {
      question:
        "What open-source technologies does AnOpenSource specialize in?",
      answer:
        "AnOpenSource has expertise in a multitude of open-source technologies such as Linux, Apache, MySQL, Python, PHP, WordPress, and more. Moreover, we actively contribute to and engage with open-source communities to foster growth and innovation.",
    },
    {
      question: "What industries does AnOpenSource cater to?",
      answer:
        "We serve diverse industries, including healthcare, finance, education, e-commerce, manufacturing, and more. Our solutions are tailored to address specific sector requirements and challenges.",
    },
  ];

  const testimonials = [
    {
      description:
      "Celebrating AnOpenSource for their exemplary service! As a tech enthusiast, I found their open-source expertise incredibly helpful in optimizing our digital infrastructure. Kudos to the team!",
      name: "Aryan Gupta",
    },
    {
      description:
      "AnOpenSource truly understands the pulse of open-source technology. Their solutions transformed our operations, and their ongoing support has been exceptional.",
      name: "Priya Sharma",
    },
    {
      description:
      "AnOpenSource's commitment to excellence is commendable. Their seamless migration from proprietary software to open-source solutions elevated our business efficiency. Highly recommended!",
      name: "Rohan Patel",
    },
    {
      description:
      "Thrilled with the results from AnOpenSource! Their holistic approach and deep knowledge of open-source technologies brought a remarkable digital transformation to our organization.",
      name: "Nisha Rao",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleToggleClick = () => {
    setShowAllFAQs(!showAllFAQs);
  };

  const handleBottomLeftClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home-container">
      <div className="home-section1">
        <Navbar/>
        <div className="home-section1-bottom">
          <div className="home-left-section1">
            <div className="home-left-section1-comment">
              <CheckCircleIcon className="home-left-section1-comment-icon" />
              <p>No Hassle , No Credit.</p>
            </div>
            <h1>
              Welcome to AnOpenSource Empowering Your{" "}
              <b style={{ color: "#CAFF33" }}>Digital Journey </b>
            </h1>
            <p>
              At AnOpenSource, our mission is to revolutionise the tech landscape
              by providing cutting-edge open-source solutions that empower
              individuals and businesses to thrive in the digital era. We are
              committed to delivering innovative, tailored, and scalable services
              that prioritise our clients' technological needs. Our aim is to
              foster collaboration, with transparency, and cost-effective
              solutions, ensuring our clients' success and growth in an
              ever-evolving technological world.
            </p>
            <button className="home-btn" content="">
              Learn More
            </button>
          </div>
          <div className="right-section">
            <div className="home-right-section1">
              <div className="home-right-section1-shortcut">
                <AddCircleIcon className="home-right-section1-shortcut-icon" />
                <div className="home-right-section1-shortcut-txt">
                  <h4>Start Project From</h4>
                  <p>INR 5,000</p>
                </div>
              </div>
              <div className="home-right-section1-top">
                <p>Pay as per your needs</p>
                <div className="text-carousel-container">
                  <div className="text-carousel">
                    {carouselContent.map((item, index) => (
                      <div className="text-carousel-block" key={index}>
                        <div className="text-carousel-block-left">
                          <SwapHorizontalCircleIcon className="text-carousel-block-icon" />
                          <div className="text-carousel-block-left-txt">
                            <p>{item.title}</p>
                            <b>{item.expert}</b>
                          </div>
                        </div>
                        <p>{item.cost}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="home-right-section1-bottom">
                <p>Get a Rough Quotation</p>
                <div className="home-right-section1-bottom-box">
                  <div className="home-right-section1-leftbox">
                    <div className="home-right-section1-left-box1">
                      <div className="home-right-section1-content">
                        <img
                          src={Ind}
                          alt="Error"
                          className="home-right-section1-img"
                        />
                        <b>INR</b>
                      </div>
                      <p>Indian Rupees</p>
                    </div>
                    <div className="home-right-section1-left-box2">
                      <b>5000</b>
                    </div>
                  </div>
                  <div className="home-right-section1-rightbox">
                    <div className="home-right-section1-right-box3">
                      <div className="home-right-section1-content">
                        <img
                          src={Usa}
                          alt="Error"
                          className="home-right-section1-img"
                        />
                        <b>USD</b>
                      </div>
                      <p>United States Dollar</p>
                    </div>
                    <div className="home-right-section1-right-box4">
                      <b>12.00</b>
                    </div>
                  </div>
                </div>
                <button className="home-right-section1-bottom-btn">
                  Book an Appointment
                </button>
              </div>
            </div>
            <div className="right-last">
              <p>Supported Currency</p>
              <div className="right-last-block">
                <MonetizationOnOutlinedIcon className="right-last-block-icons" />
                <EuroOutlinedIcon className="right-last-block-icons" />
                <CurrencyBitcoinOutlinedIcon className="right-last-block-icons" />
                <CurrencyRupeeOutlinedIcon className="right-last-block-icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2">
        <div className="home-section2-top">
          <div className="home-section2-top-content">
            <h1>
              Our <b style={{ color: "#CAFF33" }}>Products</b>
            </h1>
            <p>
              AnopenSource is dedicated to delivering innovative solutions
              tailored for both individuals and businesses, leveraging
              cutting-edge technology to address diverse needs and challenge
            </p>
          </div>
          <div className="home-section2-top-btn">
            <button className="home-section2-top-button">
              For Individuals
            </button>
            <button className="home-section2-top-button">For Businesses</button>
          </div>
        </div>
        <div className="home-section2-bottom">
          {products.map((product, index) => (
            <div
              key={index}
              className={`home-section2-bottom-block home-section2-bottom-block${
                index + 1
              }`}
            >
              {React.cloneElement(product.icon, { style: { fontSize: 40 } })}
              <h3>{product.title}</h3>
              <div className="home-section2-bottom-block-content">
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-section3">
        <div className="home-section3-top">
          <h1>Use Cases</h1>
          <p>
            At Anopensource, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of Technical solutions
          </p>
        </div>
        <div className="home-section3-bottom">
          <div className="home-section3-bottom-left">
            <div className="home-section3-bottom-leftblock">
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Managing Personal Finances</p>
              </div>
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Saving for the Future</p>
              </div>
            </div>
            <div className="home-section3-bottom-rightblock">
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Homeownership</p>
              </div>
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Education Funding</p>
              </div>
            </div>
          </div>
          <div className="home-section3-bottom-right">
            <div className="home-section3-bottom-right-top">
              <h2>For Individuals</h2>
              <p>
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers
              </p>
            </div>
            <div className="home-section3-bottom-right-mid">
              <div className="home-section3-bottom-right-mid-block">
                <h2>78%</h2>
                <p>Secure Retirement Planning</p>
              </div>
              <div className="home-section3-bottom-right-mid-block">
                <h2>63%</h2>
                <p>Manageable Debt Consolidation</p>
              </div>
              <div className="home-section3-bottom-right-mid-block">
                <h2>91%</h2>
                <p>Reducing financial Burdens</p>
              </div>
            </div>
            <div className="home-section3-bottom-right-bottom">
              <button className="home-section3-bottom-right-bottom-btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="home-section3-bottom">
          <div className="home-section3-bottom-right">
            <div className="home-section3-bottom-right-top">
              <h2>For Business</h2>
              <p>
                {" "}
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                Zillennia bank is committed to providing the right tools and
                support to achieve them
              </p>
            </div>
            <div className="home-section3-bottom-right-mid">
              <div className="home-section3-bottom-right-mid-block">
                <h2>65%</h2>
                <p>Cash Flow Management</p>
              </div>
              <div className="home-section3-bottom-right-mid-block">
                <h2>70%</h2>
                <p>Drive Business Expansion</p>
              </div>
              <div className="home-section3-bottom-right-mid-block">
                <h2>45%</h2>
                <p>Streamline payroll processing</p>
              </div>
            </div>
            <div className="home-section3-bottom-right-bottom">
              <button className="home-section3-bottom-right-bottom-btn">
                Learn More
              </button>
            </div>
          </div>
          <div className="home-section3-bottom-left">
            <div className="home-section3-bottom-leftblock">
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Startups and Entrepreneurs</p>
              </div>
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Cash Flow Management</p>
              </div>
            </div>
            <div className="home-section3-bottom-rightblock">
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Business Expansion</p>
              </div>
              <div className="home-section3-bottom-left-block">
                <AddCircleIcon className="home-section3-bottom-icons" />
                <p>Payment Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section4">
        <div className="home-section4-top">
          <h1>
            Our <b style={{ color: "#CAFF33" }}>Features</b>
          </h1>
          <p>
            Experience a host of powerful features at Zillennia bank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience
          </p>
        </div>
        <div className="home-section4-bottom">
          <div className="home-section4-bottom-left">
            <ul>
              {bottomRightData.map((category, index) => (
                <li key={index}>
                  <button onClick={() => handleBottomLeftClick(category)}>
                    {category.data}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-section4-bottom-right">
            {selectedCategory.content.map((contentItem, index) => (
              <div className="home-section4-bottom-right-block" key={index}>
                <div className="home-section4-bottom-right-block-top">
                  <h3>{contentItem.title}</h3>
                  {/* Assuming ArrowOutwardIcon is still used */}
                  <ArrowOutwardIcon className="home-section4-bottom-icons" />
                </div>
                <div className="home-section4-bottom-right-block-bottom">
                  <p>{contentItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home-section5">
        <div className="home-section5-top">
          <h1>
            <b style={{ color: "#CAFF33" }}>Frequently</b> Asked Questions
          </h1>
          <p>
            Still you have any questions? Contact our Team via support@Zillennia
            bank.com
          </p>
        </div>
        <div className="home-section5-bottom">
          <div className="home-section5-bottom-faq-container">
            {faqs
              .slice(0, showAllFAQs ? faqs.length : visibleFAQs)
              .map((faq, index) => (
                <div key={index} className="home-section5-bottom-faq-block">
                  <div className="home-section5-bottom-faq-block-top">
                    <h3>{faq.question}</h3>
                  </div>
                  <div className="home-section5-bottom-faq-block-bottom">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            {(showAllFAQs && (
              <div
                className="home-section5-bottom-hide-btn"
                onClick={handleToggleClick}
              >
                <p>Hide FAQ's </p>
                <ExpandLessIcon />
              </div>
            )) || (
              <div
                className="home-section5-bottom-toggle-btn"
                onClick={handleToggleClick}
              >
                <p>Load All FAQ's</p>
                <ExpandMoreIcon />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="home-section6">
        <div className="home-section6-top">
          <div className="home-section6-top-content">
            <h1>
              Our <b style={{ color: "#CAFF33" }}>Testimonials</b>
            </h1>
            <p>
              Discover how Zillennia bank has transformed lives with innovative
              digital solutions and personalized customer service. See why our
              clients trust us for a secure and prosperous financial journey
            </p>
          </div>
          <div className="home-section6-top-btn">
            <button className="home-section6-top-button">
              For Individuals
            </button>
            <button className="home-section6-top-button">For Businesses</button>
          </div>
        </div>
        <div className="home-section6-bottom">
          <Slider {...settings} className="home-section6-bottom-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-icons">
                {React.cloneElement(<DoneAllIcon/>, { style: { fontSize: 40 } })}
                </div>
                <div className="testimonial-description">
                  <p>{testimonial.description}</p>
                </div>
                <div className="testimonial-name">
                  <p>{testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="home-section7">
        <div className="home-section7-block">

          <div className="home-section7-left">
                <h1>Start your digital journey with <b style={{color:"#caff33"}}>AnOpenSource today!</b></h1>
                <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
          </div>
          <div className="home-section7-right">
            <button className="home-section7-right-btn">Open Account</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
