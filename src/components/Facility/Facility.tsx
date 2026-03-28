"use client";

import React, { memo } from 'react';
import { IonIcon } from '../utility/IonIcon';
import styles from "./Facility.module.css";

interface Facility {
    icon: string;
    title: string;
    description: string;
}

interface Stats {
    title: string;
    description: string;
}

const FACILITIES: Facility[] = [
    {
        icon: "storefront-outline",
        title: "Pharmacy",
        description: "On-site pharmacy stocked with all essential medications and post-treatment care products for your convenience."
    },
    {
        icon: "scan-outline",
        title: "Radiology & Imaging",
        description: "Advanced digital X-ray, ultrasound, and imaging equipment for accurate and timely diagnostics."
    },
    {
        icon: "flash-outline",
        title: "24hr Emergency",
        description: "Always-open emergency department staffed with experienced doctors and life-saving equipment."
    },
    {
        icon: "cut-outline",
        title: "Operation Theatres",
        description: "Modern minor and major operation theatres equipped for a wide range of surgical procedures."
    },
    {
        icon: "fitness-outline",
        title: "Dedicated Wards",
        description: "Comfortable general and private wards designed for patient recovery with attentive nursing care."
    },
];

const STATS: Stats[] = [
    {
        title: "Full Pharmacy",
        description: "All Medications Available",
    },
    {
        title: "24/7 Emergency",
        description: "Always Open & Staffed",
    },
    {
        title: "Modern OTs",
        description: "Minor & Major Surgeries",
    },
    {
        title: "Digital Radiology",
        description: "Fast & Accurate Imaging",
    },
    {
        title: "17+ Specialties",
        description: "All Under One Roof",
    },
];

export const Facility = memo(() => {
    return (
        <section
            className="section"
            id="facilities"
        >
            <div className="custom-container">

                <div className="text-center">
                    <p className="section-subtitle">Our Infrastructure</p>
                    <h2 className="h2">Modern Facilities</h2>
                    <p
                        className="section-text"
                        style={{
                            maxWidth: '600px',
                            margin: '20px auto 60px',
                            color: 'var(--stone-gray)'
                        }}
                    >
                        We are equipped with cutting-edge technology and modern facilities to provide you with the highest standard of dental care in a comfortable environment.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    marginTop: '50px'
                }}>
                    {FACILITIES.map((facility, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '40px 30px',
                                borderRadius: 'var(--radius-6)',
                                boxShadow: 'var(--shadow-2)',
                                textAlign: 'center',
                                transition: 'var(--transition-2)',
                                border: '1px solid var(--light-cream)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-2)';
                            }}
                        >

                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--gradient)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                boxShadow: 'var(--shadow-4)'
                            }}>
                                <IonIcon
                                    name={facility.icon}
                                    size="large"
                                    className={styles.facilityIcon}
                                    color="white"
                                />
                            </div>

                            <h3
                                className="h3"
                                style={{
                                    marginBottom: '15px',
                                    color: 'var(--darkest-forest)'
                                }}
                            >
                                {facility.title}
                            </h3>

                            <p style={{
                                color: 'var(--stone-gray)',
                                lineHeight: '1.6',
                                fontSize: '1.5rem'
                            }}>
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    marginTop: '80px',
                    padding: '50px 30px',
                    background: 'linear-gradient(135deg, var(--pale-sage) 0%, var(--soft-mint_50) 100%)',
                    borderRadius: 'var(--radius-6)',
                    textAlign: 'center'
                }}>

                    {STATS.map((stat, index) => (
                        <div key={index}>
                            <h3
                                className="h25"
                                style={{
                                    color: 'var(--vibrant-lime)',
                                    marginBottom: '10px'
                                }}
                            >
                                {stat.title}
                            </h3>
                            <p style={{ color: 'var(--stone-gray)', fontSize: '1.4rem' }}>
                                {stat.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
});

Facility.displayName = "Facility";