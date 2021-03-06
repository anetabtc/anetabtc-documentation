import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuides.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../static/img/external-arrow.svg'

const Guides = [
  {
    title: 'About anetaBTC',
    link:  '/docs/about-anetabtc/Introduction',
    description: (
      <>
        Learn about anetaBTC, an on-chain wrapped protocol on Ergo and Cardano. Learn about our mission and key principles.
      </>
    ),
  },
  {
    title: 'User Guides',
    link:  '/docs/user-guides/Liso/liso-home',
    description: (
      <>
        Learn about LISO, our tokenomics, and benefits of the NETA and cNETA tokens.
      </>
    ),
  },
  {
    title: 'Protocol overview',
    link: '/docs/protocol-overview/introduction',
    description: (
      <>
        Learn about all aspects of our architecture including minting, redeeming, burning, and transferring.
      </>
    ),
  },
];

function Guide({title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageGuides() {
  return (
    <section id = "guide-cards" style = {{marginTop: 25}} className={styles.guides}>
        {Guides.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}
