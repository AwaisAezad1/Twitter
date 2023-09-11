import React, { useState } from 'react';
import styles from './Leftuserbox.module.css';
import { NavLink } from 'react-router-dom';
import backleft from '../images/background-left.png';
import profile1 from '../images/profile-1.png';
import Viewpost from './Viewpost';

function Leftuserbox() {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  const goBack = () => {
    setShowAdditionalContent(false);
  };

  return (
    <div className={styles.leftbar}>
      {showAdditionalContent ? (
        <div>
          <img className={styles.additional} onClick={goBack} width="50" height="50" src="https://img.icons8.com/ffffff/ios/50/long-arrow-left.png" alt="long-arrow-left"/>
          <Viewpost />
        </div>
      ) : (
        <>
          <img className={styles.leftimg} src={backleft} alt='' />
          <NavLink to={"/home"}><img className={styles.profile} width="100" height="100" src={profile1} alt='' /></NavLink>
          <div className={styles.textfield}>
            <h2>Elon Musk</h2>
            <p>@ElonMusk</p>
            <h2>CEO at Tesla, SpaceX & X.</h2>
            <div className={styles.hl}></div>
            <div className={styles.follow_following}>
              <div className={styles.following}>
                <h1>200</h1> <h3>Following</h3>
              </div>
              <div className={styles.vl}></div>
              <div className={styles.followers}>
                <h1>154.2M</h1> <h3>Followers</h3>
              </div>
            </div>
            <div className={styles.hl}></div>
            <NavLink className={styles.nav_link} onClick={toggleAdditionalContent}><h1>Show More</h1></NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default Leftuserbox;
