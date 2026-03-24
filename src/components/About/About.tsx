import Image from "next/image";
import { memo } from "react";
import styles from "./About.module.css";

export const About = memo(() => (
    <section
        className={`section ${styles.about} -mt-50 md:-mt-40 lg:-mt-30`}
        id="about"
        aria-label="about"
    >
        <div className={`custom-container ${styles.customContainer}`}>

            {/* <figure className={styles.aboutBanner}>
                <Image
                    src="/images/about-banner.webp"
                    width={470}
                    height={538}
                    loading="lazy"
                    alt="about banner"
                    className="w-fill"
                />
            </figure> */}

            <div>
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">We Care For Your Health & Wellness</h2>
                <p className={`section-text ${styles.sectionText1}`}>
                    Welcome to <b>Apollo Pharmacy,</b> your trusted best <b>pharmacy in Surunga</b> and <b>best pharmacy in Damak,</b> with convenient locations serving the communities of Jhapa, Nepal. As the premier choice for <b>pharmacy in Surunga</b> and <b>pharmacy in Damak,</b> we operate with the motto <b>"Quality Medicines, Expert Guidance and Affordable Prices",</b> committed to providing high-quality pharmaceutical care in Nepal for every family.
                </p>
                <p className="section-text">
                    Our team of <b>experienced pharmacists</b> at these leading pharmacy branches offers a comprehensive range of services including <b>prescription dispensing, over-the-counter medications, health supplements, vitamins, ayurvedic medicines, baby care products, diabetic care,</b> and <b>health monitoring services.</b> We also specialize in <b>personalized medication counseling,</b> ensuring proper guidance for all age groups, as well as family healthcare solutions in Surunga and Damak.
                </p>
                <p className={`section-text ${styles.sectionText1}`}>
                    At <b>Apollo Pharmacy Nepal,</b> recognized as the <b>best pharmacy in Surunga</b> and <b>best pharmacy in Damak,</b> we combine <b>reliable pharmaceutical products</b> with compassionate service to make healthcare accessible and affordable. Whether you need <b>urgent medicines, routine health supplements, wellness products,</b> or <b>expert advice on medication management,</b> our pharmacies ensure the best quality at an affordable price.
                </p>
                <p className="section-text">
                    Choose <b>Apollo Pharmacy</b> for the <b>best pharmacy service in Surunga and Damak,</b> where healthy living begins with <b>trusted medicines</b> and <b>expert care</b> at the most reliable <b>pharmacy in Jhapa.</b>
                </p>

            </div>
        </div>
    </section>
));

About.displayName = "About";