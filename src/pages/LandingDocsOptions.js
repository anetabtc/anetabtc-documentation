import React from 'react';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../static/img/external-arrow.svg'

const Guides = [
    {
        title: 'About anetaBTC',
        link: 'docs/about-anetabtc',
        description: (
            <>
                Learn about all versions of anetaBTC and the security architecture for each protocol.
            </>
        ),
    },
    {
        title: 'Protocol Overview',
        link: 'docs/protocol-overview',
        description: (
            <>
            Dive into the architecture of the protocol. What are wrapped assets, and how do we keep them decentralized on Ergo as opposed to other wrapped BTC models.
            </>
        )
    }
];

function DocumentationLanding({Svg, title, description, link}) {
    return (
        <Link isNavLink={true} to={link} className="'col col--4', styles.guide">
            <div className="'text--center', 'padding-horiz--md', styles.wrapper">
                <ExternalArrow className="exportArrow"/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default function LandingGuides() {
    return (
        <section className="guideCards">
            {Guides.map((props, idx) => (
                <DocumentationLanding key={idx} {...props} />
            ))}
        </section>
    )
}