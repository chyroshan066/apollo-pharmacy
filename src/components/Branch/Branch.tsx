"use client";

import { memo } from "react";
import { IonIcon } from "../utility/IonIcon";
import styles from "./Branch.module.css";

interface BranchData {
    name: string;
    location: string;
    phone: string;
    email?: string;
    timing: string;
    mapLink: string;
}

const BRANCHES: BranchData[] = [
    {
        name: "Apollo Pharmacy - Surunga",
        location: "Hospital Road, Surunga, Jhapa, Nepal",
        phone: "9848136691",
        email: "apollohealthcarecenter0944@gmail.com",
        timing: "7:00 AM - 10:00 PM",
        mapLink: ""
    },
    {
        name: "Ortho Care & Trauma Centre / Pranshi Pharmacy - Damak",
        location: "Jaycees Chowk, Damak, Jhapa, Nepal",
        phone: "023-570944",
        email: "apollohealthcarecenter0944@gmail.com",
        timing: "7:00 AM - 10:00 PM",
        mapLink: "https://www.google.com/maps/place/Ortho+Care+%26+Trauma+Centre/@26.6604675,87.6958056,17z/data=!3m1!4b1!4m6!3m5!1s0x39e59178951c059b:0xb3701d293da6d3c9!8m2!3d26.6604627!4d87.6983805!16s%2Fg%2F11sk2pf3qt?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
    },
];

const BranchCard = memo(({
    name, location, phone, email, timing, mapLink
}: BranchData) => (
    <div className={styles.branchCard}>
        <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
                <IonIcon name="business-outline" />
            </div>
            <h3 className="h3">{name}</h3>
        </div>

        <div className={styles.cardBody}>
            <div className={styles.infoItem}>
                <IonIcon name="location-outline" />
                <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoText}>{location}</p>
                </div>
            </div>

            <div className={styles.infoItem}>
                <IonIcon name="call-outline" />
                <div>
                    <p className={styles.infoLabel}>Phone</p>
                    <a
                        href={`tel:+977${phone.replace(/-/g, '')}`}
                        className={styles.infoLink}
                    >
                        {phone}
                    </a>
                </div>
            </div>

            {email && (
                <div className={styles.infoItem}>
                    <IonIcon name="mail-outline" />
                    <div>
                        <p className={styles.infoLabel}>Email</p>
                        <a
                            href={`mailto:${email}`}
                            className={styles.infoLink}
                        >
                            {email}
                        </a>
                    </div>
                </div>
            )}

            <div className={styles.infoItem}>
                <IonIcon name="time-outline" />
                <div>
                    <p className={styles.infoLabel}>Timing</p>
                    <p className={styles.infoText}>{timing}</p>
                </div>
            </div>
        </div>

        <div className={styles.cardFooter}>
            <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
            >
                <IonIcon name="navigate-outline" />
                <span>Get Directions</span>
            </a>
            <a
                href={`tel:+977${phone.replace(/-/g, '')}`}
                className={styles.callButton}
            >
                <IonIcon name="call-outline" />
                <span>Call Now</span>
            </a>
        </div>
    </div>
));

BranchCard.displayName = "BranchCard";

export const Branch = memo(() => (
    <section
        className={`section ${styles.branch}`}
        id="branches"
        aria-label="branches"
    >
        <div className="custom-container">
            <div className="text-center">
                <p className="section-subtitle">Our Locations</p>
                <h2 className="h2 section-title">Visit Our Branches</h2>
                <p
                    className="section-text"
                    style={{
                        maxWidth: '700px',
                        margin: '20px auto 60px',
                        color: 'var(--stone-gray)'
                    }}
                >
                    We have multiple branches across Jhapa to serve you better.
                    Visit the nearest branch for comprehensive dental care and
                    expert treatment with modern facilities.
                </p>
            </div>

            <div className={styles.branchGrid}>
                {BRANCHES.map((branch, index) => (
                    <BranchCard
                        key={index}
                        name={branch.name}
                        location={branch.location}
                        phone={branch.phone}
                        email={branch.email}
                        timing={branch.timing}
                        mapLink={branch.mapLink}
                    />
                ))}
            </div>
        </div>
    </section>
));

Branch.displayName = "Branch";