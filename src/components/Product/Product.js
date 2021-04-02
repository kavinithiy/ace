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
import liicon from '../../assets/images/liIcon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import styles from './Product.module.scss';

const Product = () => (
  <div className={styles.Product} data-testid="Product">
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
            <li><a><Link to="/Aboutus">Company Profile</Link></a></li>
            <li><a><Link to="/DirectorProfile">Director Profile</Link></a></li>
            <li><a><Link to="/WhyUs">Why Us</Link></a></li>
            <li className={styles.activemenu}><a>Product Portfolio</a></li>
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
              <div className={styles.title}>Product <span>Portfolio</span></div>
              <div className={styles.details}>Our products are extensively used in different applications in variegated industrial segments. Our products can be availed from us within the stipulated period of time as the orders of the customers are processed without any further delay. We have a team of experts, who check the products on different parameters in order to deliver quality range of products. Manufactured in compliance with set industrial standards, our range of products is widely demanded in various industries. Moreover, we provide proper packaging of the products and deliver then at stipulated timeframe.</div>
            </div>
            <div className={styles.keyStrength}>
              <div className={styles.row}></div>
              <div className={`col-lg-12 col-md-12 ${styles.pl0}`}>
                <ul>
                  <li><span><img src={liicon}/></span>Body Shop</li>
                  <li><span><img src={liicon}/></span>Garage Workshop</li>
                  <li><span><img src={liicon}/></span>Construction Craft</li>
                  <li><span><img src={liicon}/></span>Hand Tools</li>
                  <li><span><img src={liicon}/></span>Engineering Tools</li>
                  <li><span><img src={liicon}/></span> Lighting Power</li>        
                  <li><span><img src={liicon}/></span>Industry Leading Prices</li>
                  <li><span><img src={liicon}/></span>Environmental Janitorial</li>
                  <li><span><img src={liicon}/></span>Lubrication</li>
                  <li><span><img src={liicon}/></span>Jacking Lifting</li>
                </ul>          
              </div>          
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>  
);

function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


Product.propTypes = {};

Product.defaultProps = {};

export default Product;
