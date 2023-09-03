import React from 'react';
import './style.css'

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scissor</title>
        {/* Styling links */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        {/* End of styling links */}
      </head>
      <body>
        {/* Navbar section */}
        <nav>
          <div className="menu">
            <div className="logo">
              <img className="logo-icon" src="./images/Logo.svg" alt="nav-logo" />
            </div>
            <ul className="navMenu">
              <li><a href="#" className="active">My URLs</a></li>
              <li className="tag">
                <a href="#">Features</a>
                <img src="./images/down-arrow.svg" alt="down-arrow" />
              </li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            <ul className="right-menu">
              <li><a href="#" className="active">Log in</a></li>
              <li><a href="#" className="sign-in-btn">Try for free</a></li>
            </ul>
            <div className="tuggle-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
        {/* End of navbar section */}
        <header>
          <div className="header">
            <h1 className="first-text">
              Optimize Your Online Experience with Our Advanced
              <span id="first-text-ic">URL Shortening <img src="./images/underline.svg" alt="underline" /></span>
              Solutions
            </h1>
            <p className="header-paragraph">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization options
              to reinforce your brand presence and enhance user engagement.
            </p>
            <div className="header-btns">
              <button className="header-btn btn-blue btn">Sign up</button>
              <button className="header-btn btn-none">
                Learn more
              </button>
            </div>
            <div className="chain-cont">
              <div className="chain">
                <img src="./images/chain.svg" alt="chain" />
                <p className="chain-text">
                  Seamlessly transform your long URLs into concise and shareable
                  links with just a few clicks.
                </p>
              </div>
              <div className="chain-background">
                <img src="./images/background-chain.svg" className="chain-img" alt="" />
              </div>
            </div>
          </div>
          <div className="oval-background">
            <img src="./images/Group 3.png" className="oval-background-img" alt="" />
          </div>
        </header>
        {/* Views */}
        <section className="views">
          <div className="section-center views-center">
            <h1 className="views-title">
              One Stop. <br />
              Four <span>Possibilities.</span>
            </h1>
            <ul className="views-list">
              <li className="view-number">
                3M <h6>Active users</h6>
              </li>
              <li className="view-number">
                60M
                <h6> Links&QR <br />
                   Codes Created</h6>
              </li>
              <li className="view-number">
                1B
                <h6>Clicked & Scanned <br />
                connections</h6>
              </li>
              <li className="view-number">
                300k <h6>App Integrations</h6>
              </li>
            </ul>
          </div>
        </section>
        {/* Features */}
        <section className="features" id="features">
          <div className="section-center features-center">
            <div className="features-title-container">
              <div id="section-title-bar"></div>
              <div className="features-title-text">
                <h1 className="features-title">
                  Why choose <span>Scissors</span>
                </h1>
                <p className="features-title-p">
                  Scissors is the hub of everything related to your link management.
                  We shorten your URLs, allowing you to create custom ones for personal,
                  business, and event usage. Our swift QR code creation, management,
                  and usage tracking, along with advanced analytics, are second to none.
                </p>
              </div>
            </div>
            <div className="features-list">
              <article className="feature">
                <div className="feature-icon">
                  <img src="./images/url-shortening.svg" alt="" />
                </div>
                <div className="feature-text">
                  <h2>URL Shortening</h2>
                  <p>
                    Scissors allows you to shorten URLs for your business and events.
                    Scale your URL shortening and enable URL redirects.
                  </p>
                </div>
              </article>
              <article className="feature">
                <div className="feature-icon">
                  <img src="./images/edit.svg" alt="" />
                </div>
                <div className="feature-text">
                  <h2>Custom URLs</h2>
                  <p>
                    With Scissors, you can create custom URLs of any length you want!
                    It's a solution for social media and businesses.
                  </p>
                </div>
              </article>
              <article className="feature">
                <div className="feature-icon">
                  <img src="./images/grid.svg" alt="" />
                </div>
                <div className="feature-text">
                  <h2>QR Codes</h2>
                  <p>
                    Generate QR codes for your business and events. Bring your audience
                    and customers to your doorstep with this scan-and-go solution.
                  </p>
                </div>
              </article>
              <article className="feature">
                <div className="feature-icon">
                  <img src="./images/activity.svg" alt="" />
                </div>
                <div className="feature-text">
                  <h2>Data Analytics</h2>
                  <p>
                    Receive data on the usage of your shortened URL, custom URLs, or
                    generated QR codes. Embedded analytics to monitor progress.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Pricing */}
        <section className="pricing" id="pricing">
          <div className="section-center pricing-center">
            <div className="pricing-title-container">
              <div id="section-title-bar"></div>
              <h1 className="features-title pricing-title">
                A <span>perfect price</span> for your needs.
              </h1>
            </div>
            <p className="pricing-p">
              Whether it's for personal, business, event, or social needs, you can rest
              assured that we have you in mind with our pricing plans.
            </p>
            <div className="prices">
              {/* Single price */}
              <article className="price">
                <h3 className="price-plan">Basic.</h3>
                <h2 className="price-type">Free</h2>
                <p className="price-text">Free plan for all users</p>
                <ul className="price-lists">
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                    URL Shortening
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                    Basic Link Analytics
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                    Customizable Short Links
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                    Standard Support
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                    Ad-Supported
                  </li>
                </ul>
              </article>
              <article className="price price-active">
                <h3 className="price-plan">Professional</h3>
                <h2 className="price-type">$15/ month</h2>
                <p className="price-text">Ideal for business creators</p>
                <ul className="price-lists">
                  <li className="price-option">
                    <img src="./images/check-circle.svg" alt="" /> Enhanced Link
                    Analytics
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle.svg" alt="" /> Custom Branded
                    Domains
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle.svg" alt="" /> Advanced Link
                    Customization
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle.svg" alt="" /> Priority Support
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle.svg" alt="" /> Ad-free
                    Experience
                  </li>
                </ul>
              </article>
              <article className="price">
                <h3 className="price-plan">Teams</h3>
                <h2 className="price-type">$25/ month</h2>
                <p className="price-text">Share with up to 10 users</p>
                <ul className="price-lists">
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Team
                    Collaboration
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> User Roles
                    and Permissions
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Enhance
                    Security
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> API Access
                  </li>
                  <li className="price-option">
                    <img src="./images/check-circle-blue.svg" alt="" /> Dedicated
                    Account Manager
                  </li>
                </ul>
              </article>
            </div>
            <div className="pricing-btns">
              <a href="#" className="btn pricing-btn btn-blue">Get Customer Pricing</a>
              <a href="#" className="btn pricing-btn btn-white">Select Pricing</a>
            </div>
          </div>
        </section>
        {/* Form */}
        <section className="form" id="form">
          <div className="form-center">
            <form action="" className="form-box">
              <input
                type="text"
                placeholder="Paste URL here"
                className="form-control url-input"
              />
              <div className="form-control domain-input">
                <select
                  name="choose domain"
                  id="choose domain"
                  className="domain-choice"
                >
                  <option value="choose Domain">Choose Domain</option>
                  <option value="basic">Basic</option>
                  <option value="professional">Professional</option>
                  <option value="teams">Teams</option>
                </select>
                <input
                  type="text"
                  placeholder="Type Alias here"
                  className="form-control"
                />
              </div>
              <button className="btn-blue btn form-btn">
                Trim Url <img src="./images/magic wand.svg" alt="" />
              </button>
            </form>
            <p className="form-text">
              By clicking TrimURL, I agree to the
              <strong>Terms of Service, Privacy Policy</strong> and Use of Cookies.
            </p>
          </div>
        </section>
        {/* Questions */}
        <section className="questions" id="questions">
          <div className="question-title-container">
            <div className="section-title-bar"></div>
            <h1 className="question-title">FAQs</h1>
          </div>
          <div className="section-center question-center">
            {/* first Question */}
            <article className="question active">
              <div className="question-header">
                <h2 className="question-header-title">How does URL shortening work?</h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  Is it necessary to create an account to use the URL shortening
                  service?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  Are the shortened links permanent? Will they expire?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  Are there any limitations on the number of URLs I can shorten?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  Can I customize the shortened URLs to reflect my brand or content?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  Can I track the performance of my shortened URLs?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  How secure is the URL shortening service? Are the shortened links
                  protected against spam or malicious activity?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
            <article className="question">
              <div className="question-header">
                <h2 className="question-header-title">
                  What is a QR code and what can it do?
                </h2>
                <button className="question-btn">
                  <i className="fa-solid fa-plus fa-lg plus"></i>
                  <i className="fa-solid fa-minus fa-lg minus"></i>
                </button>
              </div>
              <p className="question-body">
                URL shortening works by taking a long URL and creating a shorter,
                condensed version that redirects to the original URL. When a user
                clicks on the shortened link, they are redirected to the intended
                destination.
              </p>
            </article>
          </div>
        </section>
        {/* Newsletter */}
        <section className="newsletter">
          <div className="newsletter-center">
            <h1 className="newsletter-title">Subscribe to our newsletter</h1>
            <p className="newsletter-p">
              Stay up to date with the latest news and updates from Scissors. We
              promise not to spam you!
            </p>
            <form action="" className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-control newsletter-input"
              />
              <button className="btn newsletter-btn btn-blue">Subscribe</button>
            </form>
          </div>
        </section>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-center">
            <div className="footer-logo">
              <img className="footer-logo-icon" src="./images/Logo.svg" alt="footer-logo" />
              <p className="footer-logo-text">Scissors</p>
            </div>
            <ul className="footer-nav">
              <li><a href="#">My URLs</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            <ul className="footer-social">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              &copy; 2023 Scissors. All rights reserved.
            </p>
          </div>
        </footer>
        {/* End of Footer */}
      </body>
    </html>
  );
}

export default App;
