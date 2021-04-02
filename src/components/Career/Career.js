import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import homeicon from '../../assets/images/home_icon.png';
import abouticon from '../../assets/images/about_icon.png';
import producticon from '../../assets/images/product_icon.png';
import enquiryicon from '../../assets/images/enquiry_icon.png';
import careeractive from '../../assets/images/career_active.png';
import contacticon from '../../assets/images/contact_icon.png';
import mailicon from '../../assets/images/mail_icon.png';
import phoneicon from '../../assets/images/phone_icon.png';
import fb from '../../assets/images/facebook.png';
import ggleplus from '../../assets/images/googleplus.png';
import tw from '../../assets/images/twitter.png';
import link from '../../assets/images/link.png';
import menuicon from '../../assets/images/menuicon.png';
import fileIcon from '../../assets/images/attachment_icon.png';
import { Asterisk } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery';
import styles from './Career.module.scss';
var sty ={
  display: 'block'
}
const Career = () => (
  <div className={styles.Career} data-testid="Career">
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.row}>
          <div className={`${styles.logo} col-lg-3 col-md-2 col-sm-3 col-5`}>
            <img src={logo}/>
          </div>          
          <div className={`${styles.menuicon} col-sm-9 col-7`}  onClick={openNav}><img src={menuicon}/></div>    
          <div id="mySidenav" className={styles.sidenav}>
            <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}><span className={styles.closebtn}>&times;</span></a>
            <ul>
              <li><span><img src={homeicon}/></span><a>Home</a></li>
              <li><span><img src={abouticon}/></span><a>About us</a></li>
              <li><span><img src={producticon}/></span><a>Our Products</a></li>
              <li><span><img src={enquiryicon}/></span><a>Enquiry</a></li>
              <li><span><img src={careeractive}/></span><a className={styles.active}>Career</a></li>
              <li><span><img src={contacticon}/></span><a>Contact</a></li>
            </ul> 
          </div>
          <div className={`${styles.menuitem} col-lg-9 col-md-10`}>  
            <ul>
              <li><span><img src={homeicon}/></span><a>Home</a></li>
              <li><span><img src={abouticon}/></span><a>About us</a></li>
              <li><span><img src={producticon}/></span><a>Our Products</a></li>
              <li><span><img src={enquiryicon}/></span><a>Enquiry</a></li>
              <li><span><img src={careeractive}/></span><a className={styles.active}>Career</a></li>
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
      <div className={styles.careerStart}>
        <div className={styles.carrTitle}>Careers<span></span></div>
        <div className={styles.crrForm}>
          <form> 
            <div className={styles.leftSide}>
              <div className={`form-group ${styles.frmCntl}`}>
                <label for="name" className={styles.frmcntrl}>Name<Asterisk color="#DD0030" size={8} className={styles.btsIcon} /></label>
                <input type="text" className={`form-control ${styles.frmBox}`} id="name" required></input>
              </div>
              <div className={`form-group ${styles.frmCntl}`}>
                <label for="email" className={styles.frmcntrl}>Eamil<Asterisk color="#DD0030" size={8} className={styles.btsIcon} /></label>
                <input type="Eamil" className={`form-control ${styles.frmBox}`} id="email" required></input>
              </div>
              <div className={`form-group ${styles.frmCntl}`}>
                <label for="mobile" className={styles.frmcntrl}>Mobile No<Asterisk color="#DD0030" size={8} className={styles.btsIcon} /></label>
                <input type="number" className={`form-control ${styles.frmBox}`} id="mobile" required></input>
              </div>
              <div className={`form-group ${styles.fileFld} ${styles.frmCntl}`}>
                <label for="attachment" className={styles.frmcntrl}>Attachments<Asterisk color="#DD0030" size={8} className={styles.btsIcon} /><img src={fileIcon} className={styles.fileicon}/></label>              
                <input type="file" className={`form-control ${styles.frmBox} ${styles.filetxt}`} id="attachment" placeholder="Drag & Drop here" required></input>
              </div>
            </div>
            <div className={styles.rightside}>
             <div className={`form-group ${styles.fileFld} ${styles.frmCntl}`}>
                <label for="textara" className={styles.frmcntrl}>Description<Asterisk color="#DD0030" size={8} className={styles.btsIcon} /></label>              
                <textarea className={`form-control ${styles.frmtextarea} ${styles.filetxt}`} id="textara" required></textarea>
              </div>
            </div>
            <button type="submit" className={styles.submitbtn}>Submit</button>
          </form>
        </div>
      </div>
    </div>  
  </div>
);



function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
}

function openMnuList(){
  document.getElementById("abtMenuList").style.height = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


Career.propTypes = {};

Career.defaultProps = {};

export default Career;
