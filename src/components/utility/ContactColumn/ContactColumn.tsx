import { memo } from "react";
import { IonIcon } from "../IonIcon";
import { CONTACTS } from "@/constants/contact-links";
import styles from "./ContactColumn.module.css";

export const ContactColumn = memo(() => (
    <>
        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="location-outline" />
            </div>
            <a
                href="https://www.google.com/maps/place/Ortho+Care+%26+Trauma+Centre/@26.6603551,87.6984534,17z/data=!4m15!1m8!3m7!1s0x39e59178951c059b:0xb3701d293da6d3c9!2sOrtho+Care+%26+Trauma+Centre!8m2!3d26.6604627!4d87.6983805!10e5!16s%2Fg%2F11sk2pf3qt!3m5!1s0x39e59178951c059b:0xb3701d293da6d3c9!8m2!3d26.6604627!4d87.6983805!16s%2Fg%2F11sk2pf3qt?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                className="footer-link"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Jaycees Chowk, Damak, Jhapa, Nepal
                </address>
            </a>
        </li>

        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="location-outline" />
            </div>
            <a
                href=""
                className="footer-link"
                target="_blank"
            >
                <address className={styles.itemText}>
                    Hospital Road, Surunga, Jhapa, Nepal
                </address>
            </a>
        </li>

        {CONTACTS.map((contact, index) => (
            <li
                key={index}
                className={styles.footerItem}
            >
                <div className={styles.itemIcon}>
                    <IonIcon name={contact.ionIcon} />
                </div>
                <a
                    href={contact.href}
                    className="footer-link"
                    target="_blank"
                >
                    {contact.textNumber}
                </a>
            </li>
        ))}

        <li className={styles.footerItem}>
            <div className={styles.itemIcon}>
                <IonIcon name="mail-outline" />
            </div>
            <a
                href="mailto:apollohealthcarecenter0944@gmail.com"
                className="footer-link"
            >
                apollohealthcarecenter0944@gmail.com
            </a>
        </li>
    </>
));

ContactColumn.displayName = "ContactColumn";