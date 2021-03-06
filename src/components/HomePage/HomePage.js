import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import homeactive from '../../assets/images/home_active.png';
import abouticon from '../../assets/images/about_icon.png';
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
import director from '../../assets/images/director.png';
import directorls from '../../assets/images/directorls.png';
import quality from '../../assets/images/quality.png';
import qualityls from '../../assets/images/qualityls.png';
import product from '../../assets/images/product.png';
import productls from '../../assets/images/productls.png';
import bluepoint from '../../assets/images/bluepoint.png';
import atlas from '../../assets/images/atlas.png';
import bahco from '../../assets/images/bahco.png';
import snapon from '../../assets/images/snapon.png';
import cdi from '../../assets/images/cdi.png';
import sioux from '../../assets/images/sioux.png';
import gesipa from '../../assets/images/gesipa.png';
import sealey from '../../assets/images/sealey.png';
import williams from '../../assets/images/williams.png';
import menuicon from '../../assets/images/menuicon.png'
import Slider from "react-slick";
import snapimg from '../../assets/images/snap.jpg';
import atlasimg from '../../assets/images/atlas.jpg';
import gesipaimg from '../../assets/images/gesipa.jpg';
import sealayimg from '../../assets/images/sealay.jpg';
import foamimg from '../../assets/images/foam.jpg';
import williamsimg from '../../assets/images/williams.jpg';
import siouximg from '../../assets/images/sealay.jpg';
import bluepointimg from '../../assets/images/bluepoint.jpg';
import bahcoimg from '../../assets/images/bahco.jpg';
import cdiimg from '../../assets/images/cdi.jpg';
import "../../assets/css/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import styles from './HomePage.module.scss';
function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
              <li><span><img src={homeactive}/></span><a className={styles.active}>Home</a></li>
              <li><span><img src={abouticon}/></span><Link to="/Aboutus">About us</Link></li>
              <li><span><img src={producticon}/></span><a>Our Products</a></li>
              <li><span><img src={enquiryicon}/></span><Link to="/Enquiry">Enquiry</Link></li>
              <li><span><img src={careericon}/></span><Link to="/Career">Career</Link></li>
              <li><span><img src={contacticon}/></span><a>Contact</a></li>
            </ul> 
          </div>
          <div className={`${styles.menuitem} col-lg-9 col-md-10`}>  
            <ul>
              <li><span><img src={homeactive}/></span><a className={styles.active}>Home</a></li>
              <li><span><img src={abouticon}/></span><a><Link to="/Aboutus">About us</Link></a></li>
              <li><span><img src={producticon}/></span><a>Our Products</a></li>
              <li><span><img src={enquiryicon}/></span><a><Link to="/Enquiry">Enquiry</Link></a></li>
              <li><span><img src={careericon}/></span><a><Link to="/Career">Career</Link></a></li>
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
      <div className={styles.body}>
        <div className={styles.bnrs}>
          <Slider {...settings}>
            <div className={styles.slide1}>      
              <div className={styles.splfont}>WE HAVE IDEAS FOR EVERYONE</div>
              <div className={styles.sldrfont}>We are a prominent importer, supplier, trader and service provider of a wide range of products that can be availed from us we are the authorised business partner of the brands we promote.</div>
            </div>
            <div className={styles.slide1}>
              sdfkhskfjhskjdfhkjdsfhkjdshfjs
            </div>
            <div className={styles.slide1}>
              ygujgou[pgj[p[pfihkpdfogdpoug]]]
            </div>
          </Slider>
        </div>
        <div className={styles.abtdetail}>
          <div className="row">
            <div className={`${styles.pr10} col-lg-4 col-md-4 col-sm-4 col-4`}>              
              <div className={styles.dirProfile }>           
                <img src={directorls} className={`${styles.fr} ${styles.dirls}`}/>                
                <div className={styles.prodet}>                    
                  <img src={director} className={`${styles.fl} ${styles.dir}`}/>
                  <div className={styles.protxt}>
                    <div className={styles.nmetxt}>Director</div>
                    <div className={styles.nmenormal}>Profile</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.pr10} ${styles.pl10} col-lg-4 col-md-4 col-sm-4 col-4`}>
                <div className={styles.qualityAssr}>
                  <img src={qualityls} className={`${styles.fr} ${styles.qultyls}`}/>
                  <div className={styles.prodet}>   
                    <img src={quality} className={`${styles.fl} ${styles.qulty}`}/>
                    <div className={styles.protxt}>
                      <div className={styles.nmetxt}>Quality</div>
                      <div className={styles.nmenormal}>Assurance</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={`${styles.pl10} col-lg-4 col-md-4 col-sm-4 col-4`}>
                <div className={styles.productBio}>
                  <img src={productls} className={`${styles.fr} ${styles.prdctls}`}/>
                  <div className={styles.prodet}></div> 
                    <img src={product} className={`${styles.fl} ${styles.prdctls}`}/>
                    <div className={styles.protxt}>
                      <div className={styles.nmetxt}>Products</div>
                      <div className={styles.nmenormal}>Portfolio</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.clearfix}></div>
        <div className={styles.outProduct}>
          <div className={styles.proTitle}>Our Products</div>
          <div className={styles.proList}>
            <div className={styles.list}>
               <img src={snapimg}/>
              <div className={`${styles.pronme} ${styles.selectedbox}`}>Snap on</div>
            </div>
            <div className={styles.list}>
              <img src={atlasimg}/>
              <div className={styles.pronme}>Atlas Copco</div>
            </div>
            <div className={styles.list}>
              <img src={gesipaimg}/>
              <div className={styles.pronme}>Gesipa</div>
            </div>
            <div className={styles.list}>
              <img src={sealayimg}/>
              <div className={styles.pronme}>Sealey</div>
            </div>
            <div className={styles.list}>
              <img src={foamimg}/>
              <div className={styles.pronme}>Foam Program</div>
            </div>
            <div className={styles.list}>
              <img src={williamsimg}/>
              <div className={styles.pronme}>Williams</div>
            </div>
            <div className={styles.list}>
              <img src={siouximg}/>
              <div className={styles.pronme}>Sioux</div>
            </div>
            <div className={styles.list}>
              <img src={bluepointimg}/>
              <div className={styles.pronme}>Blue-Point</div>
            </div>          
            <div className={styles.list}>
              <img src={bahcoimg}/>
              <div className={styles.pronme}>Bahco</div>
            </div>
            <div className={styles.list}>
              <img src={cdiimg}/>
              <div className={styles.pronme}>CDI Torque</div>
            </div>
          </div>
        </div>            
      </div>
      <div className={styles.clearfix}></div>  
      <div className={styles.brand}>
        <div className={styles.brndTitle}>Our Brands</div>
        <div className={styles.brndlist}>
          <ul>
            <li className={styles.pl0}><img src={bluepoint} className={styles.bluepoint}/></li>
            <li><img src={atlas} className={styles.atlas}/></li>
            <li><img src={bahco} className={styles.bahco}/></li>
            <li><img src={snapon} className={styles.snapon}/></li>
            <li><img src={cdi} className={styles.cdi}/></li>
            <li><img src={sioux} className={styles.sioux}/></li>
            <li><img src={gesipa} className={styles.gesipa}/></li>
            <li><img src={sealey} className={styles.sealey}/></li>
            <li><img src={williams} className={styles.williams}/></li>
          </ul>
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
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
