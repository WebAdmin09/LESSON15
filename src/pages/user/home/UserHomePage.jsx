import { Fragment } from 'react'
import '../../../assets2/css/style2.css'
// import '../../../assets2/css/icomoon.css'
// import '../../../assets2/css/bootstrap.min.css'
// import '../../../assets2/css/animate.css'
// import '../../../assets2/css/aos.css'
// import '../../../assets2/css/flaticon.css'
// import '../../../assets2/css/ionicons.min.css'
// import '../../../assets2/css/magnific-popup.css'
// import '../../../assets2/css/open-iconic-bootstrap.min.css'
// import '../../../assets2/css/owl.carousel.min.css'
// import '../../../assets2/css/owl.theme.default.min.css'

const UserHomePage = () => {
  return (
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Clark</a>
        <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
            <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
            <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
            <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
            <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
            <li className="nav-item"><a href="#blog-section" className="nav-link"><span>My Blog</span></a></li>
            <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    </Fragment>
  )
}

export default UserHomePage