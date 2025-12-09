import React from 'react';
import styles from '@/styles/Footer.module.css';


const Footer = () => {
  return (
    <div className={styles.main_footer}>

      <h1 className={styles.footer_heading}>
        THE FAST LANE OF THE <span className={styles.footer_web}>WEB</span>
      </h1>

      <div className={styles.footer_subheading}>
        © {new Date().getFullYear()} QuickURL. All Rights Reserved.
      </div>

    </div>
  )
}

export default Footer
