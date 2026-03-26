import Image from "next/image";
import { memo } from "react";
import { IonIcon } from "../utility/IonIcon";
import { DentistType } from "@/types";
import { DENTISTS } from "@/constants";
import { TitleHeader } from "../utility/TitleHeader";
import styles from "./Dentist.module.css";

const DentistCard = memo(({
    imgSrc, name, ionIcon, position
}: DentistType) => (
    <li className={styles.scrollbarItem}>
        <div className={styles.doctorCard}>
             <div className={`relative w-full overflow-hidden rounded-[var(--radius-4)] mb-[25px]`}
                style={{ height: "280px" }}
            >
                <Image
                    src={imgSrc}
                    fill
                    loading="lazy"
                    alt={name}
                    className="object-contain object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
            </div>
            <h3 className="h3">
                <a
                    href="#"
                    className={styles.cardTitle}
                >
                    {name}
                </a>
            </h3>
            <p className={styles.cardSubtitle}>{position}</p>
            <ul className={styles.cardSocialList}>

                {ionIcon?.map((icon, index) => (
                    <li key={index}>
                        <a
                            href={icon.ionIconLink}
                            className={styles.cardSocialLink}
                            target="_blank"
                        >
                            <IonIcon name={icon.ionIconName}></IonIcon>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    </li>
));

DentistCard.displayName = "DoctorCard";

export const Dentist = memo(() => (
    <section
        className={`section ${styles.doctor}`}
        id="doctor"
        aria-label="doctor"
    >
        <div className="custom-container">

            <TitleHeader
                title={"Our Doctors"}
                subTitle={"Best Expert Dentist"}
                className="mb-20"
            />

            <ul className={styles.hasScrollbar} style={{ paddingBlockEnd: "40px"}}>

                {DENTISTS.map((dentist, index) => (
                    <DentistCard
                        key={index}
                        imgSrc={dentist.imgSrc}
                        name={dentist.name}
                        ionIcon={dentist.ionIcon}
                        position={dentist.position}
                    />
                ))}

            </ul>
        </div>
    </section>
));

Dentist.displayName = "Dentist";