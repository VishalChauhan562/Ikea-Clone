import React from "react";
import styles from "./login.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { LogInput } from "./LogInput";
export const LogIn = () => {
  return (
    <div className={styles.MainLogInDiv} >
      <div className={styles.leftSection}>
        <div className={styles.IkeaIcon}>
          <FaArrowLeft style={{ color: "white" }} />
          <svg
            width="80"
            height="33"
            viewBox="0 0 80 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 32.7711H79.9885L80 0H0V32.7711ZM40 30.8862C17.667 30.8862 1.5592 24.3066 1.5592 16.3856C1.5592 8.46452 17.6555 1.88486 39.9886 1.88486C62.3216 1.88486 78.4294 8.45296 78.4294 16.3856C78.4294 24.3181 62.3331 30.8862 40 30.8862Z"
              fill="white"
            />
            <path
              d="M37.73 21.0341C37.9822 21.4041 38.2574 21.7511 38.5784 22.0633H29.9226C29.9226 21.7164 29.6016 21.011 29.2233 20.4559C28.8449 19.9009 26.873 16.8597 26.873 16.8597V21.0341C26.873 21.381 26.873 21.7164 27.045 22.0633H19.8337C20.0057 21.7164 20.0057 21.381 20.0057 21.0341V11.1126C20.0057 10.7657 20.0057 10.4303 19.8337 10.0834H27.045C26.873 10.4303 26.873 10.7657 26.873 11.1126V15.4374C26.873 15.4374 29.1774 12.4193 29.7048 11.7023C30.106 11.1704 30.599 10.4188 30.599 10.0719H38.1198C37.6039 10.4188 37.0306 11.0432 36.5606 11.6214C36.1479 12.1302 33.8091 15.0095 33.8091 15.0095C33.8091 15.0095 37.2714 20.3519 37.73 21.0341ZM39.9885 11.1126V21.0341C39.9885 21.381 39.9885 21.7164 39.8165 22.0633H53.7346V18.7445C53.3906 18.918 53.0582 18.918 52.7142 18.918H46.8558V17.3453H52.4849V14.8245H46.8558V13.2519H52.7142C53.0582 13.2519 53.3906 13.2518 53.7346 13.4137V10.095H39.828C39.9885 10.4303 39.9885 10.7657 39.9885 11.1126ZM73.0295 21.0341C73.1441 21.4157 73.3391 21.7626 73.5913 22.0633H66.0476C66.0819 21.7164 65.9558 21.381 65.8183 21.0341C65.8183 21.0341 65.7036 20.7566 65.5431 20.3519L65.4743 20.1784H61.1292L61.0605 20.3519C61.0605 20.3519 60.9343 20.6872 60.8197 21.0341C60.7051 21.381 60.5789 21.7164 60.6248 22.0633H54.6747C54.9154 21.7626 55.0989 21.4157 55.2135 21.0341C55.4084 20.4906 58.5038 11.8874 58.779 11.1126C58.9051 10.7657 59.0312 10.4303 58.9854 10.0834H69.0398C68.9481 10.4303 69.1315 10.7657 69.2576 11.1126C69.5557 11.8758 72.7773 20.3634 73.0295 21.0341ZM64.5228 17.646C63.9725 16.2006 63.5253 14.9979 63.468 14.8707C63.3763 14.6163 63.2961 14.3504 63.2387 14.0844C63.1929 14.3504 63.1126 14.6163 63.0324 14.8707C62.998 14.9864 62.5508 16.2006 62.0349 17.646H64.5228ZM16.4173 10.0834H8.5755C8.74747 10.4303 8.74747 10.7657 8.74747 11.1126V21.0341C8.74747 21.381 8.74747 21.7164 8.5755 22.0633H16.4173C16.2453 21.7164 16.2453 21.381 16.2453 21.0341V11.1126C16.2453 10.7657 16.2453 10.4188 16.4173 10.0834ZM70.6219 11.0316C70.5875 10.1875 71.241 9.48213 72.0779 9.45901C72.1123 9.45901 72.1467 9.45901 72.1811 9.45901C73.0295 9.44744 73.7288 10.1297 73.7403 10.9738C73.7403 10.997 73.7403 11.0085 73.7403 11.0316C73.7632 11.8989 73.0868 12.6274 72.2155 12.6505C71.3557 12.6737 70.6334 11.9914 70.6105 11.1126C70.6219 11.0895 70.6219 11.0548 70.6219 11.0316ZM70.9315 11.0316C70.9315 11.7255 71.4818 12.2921 72.1811 12.3036C72.869 12.3036 73.4308 11.7486 73.4422 11.0432C73.4422 10.3494 72.8919 9.78279 72.1926 9.77122C71.5276 9.7481 70.9659 10.2685 70.9429 10.9391C70.9315 10.9738 70.9315 10.997 70.9315 11.0316ZM71.8716 11.9683H71.5964V10.0834H72.2958C72.6282 10.095 72.8805 10.361 72.8805 10.6963C72.8805 10.9276 72.7543 11.1357 72.548 11.2514L72.9492 11.9799H72.6397L72.2728 11.3092H71.8716V11.9683ZM71.8716 11.0316H72.2499C72.4333 11.0432 72.5938 10.9045 72.5938 10.7194C72.6053 10.5344 72.4677 10.3725 72.2843 10.3725C72.2728 10.3725 72.2614 10.3725 72.2499 10.3725H71.8716V11.0316Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.LogInTitle}>
          <h2>
            <span style={{ color: "rgb(235,217,20)" }}>Login</span> to your IKEA{" "}
            <br /> account.
          </h2>
          <p>
            Too many passwords? <br /> You can now login with an OTP we will
            send on your email <br /> address or verified mobile number. <br />{" "}
            <br /> Access your IKEA account using your email address to <br />{" "}
            add and verify your mobile number.
          </p>
        </div>
        <div className={styles.LogInFooter}>
          <p>
            IKEA.in - <a href="/">Cookie Policy</a> and{" "}
            <a href="/">Privacy Policy</a> <br /> © Inter IKEA Systems B.V.
            1999-2022
          </p>
        </div>
      </div>
      <LogInput/>
    </div>
  );
};
