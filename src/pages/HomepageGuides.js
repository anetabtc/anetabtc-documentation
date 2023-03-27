import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuides.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../static/img/external-arrow.svg'

const Guides = [
  {
    title: 'Get Started',
    link:  '/docs/get-started/Introduction',
    description: (
      <>
        Learn about anetaBTC, an on-chain and open-source wrapping protocol on Cardano and Ergo.
      </>
    ),
  },
  {
    title: 'anetaBTC Protocol',
    link: '/docs/protocol-overview/introduction',
    description: (
      <>
        Learn about all versions of anetaBTC and the security architecture for each protocol.
      </>
    ),
  },
  {
    title: 'User Guides',
    link:  '/docs/user-guides/Liso/liso-home',
    description: (
      <>
        Learn about Minting, Redeeming, and Use Cases for cBTC and eBTC.
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
