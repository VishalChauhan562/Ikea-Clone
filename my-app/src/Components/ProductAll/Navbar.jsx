import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import styles from "./Css/Navbar.module.css";

export const Navbar = () => {
    return (
        <div style={{ marginTop: "1rem" }}>
            <div className={styles.grid}>
                <div className={styles.flex_left}>
                    <div className={styles.hamburger1}>

                        <MenuRoundedIcon />
                    </div>
                    <img src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="" />

                </div>

                <div className={styles.no_input}>
                    <SearchOutlinedIcon className={styles.search_icon} />
                    <input type="text" placeholder="What are you looking for?" className={styles.search_bar}
                    />
                    <CameraAltOutlinedIcon className={styles.camera_icon} />
                </div>
                <div className={styles.flex_right}>
                    <div className={styles.truck}>

                        <LocalShippingOutlinedIcon />
                    </div>
                    <PersonOutlineOutlinedIcon />
                    <ShoppingBagOutlinedIcon />
                    <div className={styles.hamburger2}>

                        <MenuRoundedIcon />
                    </div>
                </div>
            </div>

            <div className={styles.flex_nav_bottom}>
                <p className={styles.para}>Products</p>
                <p className={styles.para}>Rooms</p>
                <p className={styles.para}>New at IKEA</p>
                <p className={styles.para}>All offers</p>
            </div>
        </div >
    )
}
