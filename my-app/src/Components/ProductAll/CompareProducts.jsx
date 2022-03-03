import React from 'react';
import { Context } from '../Context';
import styles from "./Css/CompareProducts.module.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';
import { style } from '@mui/system';


export const CompareProducts = () => {
    const { toCompare, setOnHoverActiveContext, onHoverActiveContext } = React.useContext(Context);
    const [wishlist, setWishlist] = React.useState(false);
    const [onHoverActive, setOnHoverActive] = React.useState(false);

    React.useEffect(() => {
        if (onHoverActiveContext) {
            setOnHoverActive(true);
        } else {
            setOnHoverActive(false);
        }
    }, [onHoverActiveContext])

    const onHoverHandle = () => {
        setOnHoverActive(!onHoverActive);
    }
    const handleWishList = () => {
        setWishlist(!wishlist);
    }
    // console.log(toCompare);

    return (

        <div className={styles.starter}>
            <div>
                <h1>Product comparison</h1>
                <p className={styles.text_small}>Comparing {toCompare.length} products</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "4.5rem", paddingBottom: "1.5rem", borderBottom: "solid 1px #dfdfdf" }}>
                <button className={styles.button} onClick={() => setOnHoverActiveContext(false)}>Product</button>
                <button className={styles.button} onClick={() => setOnHoverActiveContext(true)}>Rooms</button>
            </div>

            <div>
                <div className={styles.completeDiv}>
                    {toCompare.map(item => (
                        <div>
                            {/* Can cut from here */}
                            <div className={styles.one_product_div}>
                                {/* one product */}
                                <div className={styles.upper_part}>
                                    {/* upper part */}
                                    <div className={styles.div_flex_two_buttons}>
                                        <CloseOutlinedIcon />
                                        <FavoriteIcon onClick={handleWishList} color={wishlist ? "action" : "disabled"} />
                                    </div>
                                    <div >
                                        {!onHoverActive ? <img className={styles.image_compare} src={item.img1} alt="" /> :
                                            <img className={styles.image_compare} src={item.img2} alt="" />}
                                    </div>
                                    <div>
                                        {/* Details */}
                                        <h3>{item.title}</h3>
                                        <p className={styles.size}>{item.size}</p>
                                        <h2><span className={styles.span}>RS</span>{item.price}</h2>
                                    </div>
                                </div>
                                <div >
                                    <p className={styles.text_small_lite}>A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.</p>
                                </div>
                                <div className={styles.last_div}>
                                    <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Material</h2>
                                    <ul>
                                        <li>Wood (including board)</li>
                                        <li>Metal</li>
                                    </ul>
                                </div>
                                <div className={styles.last_div}>
                                    <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Measure</h2>
                                    <p className={styles.measurement}>Width - 142 cm (55 7/8 ")</p>
                                    <p className={styles.measurement}>Height - 75 cm (29 1/2 ")
                                    </p>
                                    <p className={styles.measurement}>Depth - 50 cm (19 5/8 ")</p>
                                </div>
                                <div className={styles.last_div}>
                                    <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Ratings</h2>
                                    <h2>{item.star}</h2>
                                    <p><Rating name="read-only" size="small" value={parseInt(item.star)} class={styles.c} readOnly /></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
