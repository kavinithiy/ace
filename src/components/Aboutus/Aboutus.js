import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import homeicon from '../../assets/images/home_icon.png';
import aboutactive from '../../assets/images/about_active.png';
import producticon from '../../assets/images/product_icon.png';
import enquiryicon from '../../assets/images/enquiry_icon.png';
import careericon from '../../assets/images/career_icon.png';
import contacticon from '../../assets/images/contact_icon.png';
import mailicon from '../../assets/images/mail_icon.png';
import phoneicon from '../../assets/images/phone_icon.png';
import fb from '../../assets/images/facebook.png';
import ggleplus from '../../assets/images/googleplus.png';
import tw from '../../assets/images/twitter.png';
import link from '../../assets/images/link.png';
import menuicon from '../../assets/images/menuicon.png';
import cmpnyprfle from '../../assets/images/company_profile.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import styles from './Aboutus.module.scss';
function Aboutus() { 
  return (   
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.row}>
          <div className={`${styles.logo} col-lg-3 col-md-2 col-sm-4 col-5`}>
            <img src={logo}/>
          </div>          
          <div className={`${styles.menuicon} col-sm-7 col-7`}  onClick={openNav}><img src={menuicon}/></div>    
          <div id="mySidenav" className={styles.sidenav}>
            <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}><span className={styles.closebtn}>&times;</span></a>
            <ul>
              <li><span><img src={homeicon}/></span><a><Link to="/HomePage">Home</Link></a></li>
              <li><span><img src={aboutactive}/></span><a className={styles.active}>About us</a></li>
              <li><span><img src={producticon}/></span><a>Our Products</a></li>
              <li><span><img src={enquiryicon}/></span><a><Link to="/Enquiry">Enquiry</Link></a></li>
              <li><span><img src={careericon}/></span><a>Career</a></li>
              <li><span><img src={contacticon}/></span><a>Contact</a></li>
            </ul> 
          </div>
          <div className={`${styles.menuitem} col-lg-9 col-md-10`}>  
            <ul>
              <li><span><img src={homeicon}/></span><a><Link to="/HomePage">Home</Link></a></li>
              <li><span><img src={aboutactive}/></span><a className={styles.active}>About us</a></li>
              <li><span><img src={producticon}/></span><a>Our Products</a></li>
              <li><span><img src={enquiryicon}/></span><a><Link to="/Enquiry">Enquiry</Link></a></li>
              <li><span><img src={careericon}/></span><a>Career</a></li>
              <li><span><img src={contacticon}/></span><a>Contact</a></li>
            </ul>     
          </div>
        </div>   
      </div>  
      <div className={styles.clearfix}></div>
      <div className={styles.sclmedia}>
        <div className={styles.row}>      
          <div className="col-lg-6 col-md-6 col-4">
            <div className={styles.mailid}>
              <span><img src={mailicon}/></span><div className={styles.mailnme}>Contact@acetechtools.com</div>
            </div>
            <div className={styles.phoneno}>
              <span><img src={phoneicon}/></span><div className={styles.phonenum}>044 4551 3804</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-8">
            <div className={styles.scllink}>
              <ul>
                <li><img src={fb}/></li>
                <li><img src={ggleplus}/></li>
                <li><img src={link}/></li>
                <li><img src={tw}/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.clearfix}></div>
      <div className={styles.abtcompany}>
        <div className={styles.profileList}>
          <ul>
            <li className={styles.activemenu}>Company Profile</li>
            <li><a><Link to="/DirectorProfile">Director Profile</Link></a></li>
            <li><a><Link to="/WhyUs">Why Us</Link></a></li>
            <li><a><Link to="/Product">Product Portfolio</Link></a></li>
            <li><a><Link to="/Quality">Quality Assurance</Link></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.clearfix}></div>
      <div className={styles.companyProfile}>
        <div className={styles.row}>
          <div className="col-lg-5 col-md-5">
            <div className={styles.profileImg}>
              <img src={cmpnyprfle}/>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className={styles.profiledetail}>
              <div className={styles.title}>Company <span>Profile</span></div>
              <div className={styles.details}>Acetech tools are a renowned and trusted business associate of Snap On Tools, Sealey, Gesipa, who are known for their quality product range.  We take into consideration the ever changing needs of our clients and offer improvised range of wrenches, ratchets, hammers, drills, polishers, sanders, grinders, sockets, pliers, screw drivers, torque tools, power tools and other accessories. The main competitive advantage of our company is our experienced and resourceful research and development unit.  Our constant technological up gradations as well as persistent dedication of our technical professionals has brought us to the forefront among the reckoned Manufacturers and distributors.</div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
}
function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
Aboutus.propTypes = {};

Aboutus.defaultProps = {};

export default Aboutus;
