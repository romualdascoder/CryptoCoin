import React from "react";
import styles from "../../styles/Dropdown.module.css";
import { menuData } from "../../data/MenuData";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Dropdown = ({ isOpen, toggle }) => {
  //   const dropDownToggleStyle = {
  //     opacity:isOpen?'1':'0',
  //     left:isOpen?'0':'-100%'
  // }
  return (
    <div
      className={styles.container}
      isOpen={isOpen}
      onClick={toggle}
      style={{ opacity: isOpen ? "1" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div className={styles.icon}>
        <FaTimes onClick={toggle} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          {menuData.map((item, index) => {
            return (
              <div className={styles.link} key={index}>
                <Link to={item.link}> {item.title} </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.btnWrap}>
          <div className={styles.btn}>
            <Link to="/contact">
              <div> Contact Us </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
