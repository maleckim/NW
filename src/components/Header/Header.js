import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.heading}>
      <div className={styles.imgContainer}>
        <img src="https://yt3.ggpht.com/ytc/AKedOLQbuiIS43ZelqL3xBoxcx-AEkUi3afTl1320GT1-g=s900-c-k-c0x00ffffff-no-rj" />
      </div>
      <div className={styles.title}></div>
    </div>
  );
}
