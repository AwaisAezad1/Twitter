import styles from './VerificationBox.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Verified from '../images/Verified.png';

function VerificationBox() {
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [showVerificationBox, setShowVerificationBox] = useState(true);

  const toggleButton1 = () => {
    setButton1Active(true);
    setShowAdditionalContent(false);
    setButton2Active(false);
  };

  const toggleButton2 = () => {
    setButton2Active(true);
    setShowAdditionalContent(true);
    setButton1Active(false);
  };

  const hideVerificationBox = () => {
    setShowVerificationBox(false);
  };

  return (
    <div>
      {showVerificationBox && (
        <div className={styles.VerificationBoxmain}>
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/ffffff/ios/50/multiply.png"
            alt="multiply"
            onClick={hideVerificationBox}
          />
          <h1>Choose The Right Subscription For You: </h1>
          <div className={styles.buttons}>
            <button className={button1Active ? styles.activeButton : ''} onClick={toggleButton1}>
              Annually
            </button>
            <button className={button2Active ? styles.activeButton : ''} onClick={toggleButton2}>
              Monthly
            </button>
          </div>
          {showAdditionalContent ? (
            <div>
              <div className={styles.items}>
                <ul>
                  <li>Prioritized rankings in conversations and search</li>
                  <li>See approximately twice as many posts between ads in your For You and Following timelines.</li>
                  <li>Add bold and italic text in your posts</li>
                  <li>Post longer videos and 1080p video uploads</li>
                  <li>All the existing Premium features, including edit post, Bookmark Folders and early access to new features</li>
                </ul>
              </div>
              <NavLink className={styles.Nav_link}>PKR 2,250 / Year<img width='26' height='26' src={Verified} alt="verified-account"/> </NavLink>
            </div>
          ) : (
            <>
              <div className={styles.items}>
                <ul>
                  <li>Prioritized rankings in conversations and search</li>
                  <li>See approximately twice as many posts between ads in your For You and Following timelines.</li>
                  <li>Add bold and italic text in your posts</li>
                  <li>Post longer videos and 1080p video uploads</li>
                  <li>All the existing Premium features, including edit post, Bookmark Folders and early access to new features</li>
                </ul>
              </div>
              <NavLink className={styles.Nav_link}>PKR 23,700 / Year<img width='26' height='26' src={Verified} alt="verified-account"/> </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default VerificationBox;
