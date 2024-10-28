import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <>
        <a href="/docs/leo/apply">LEO : Getting Started</a>
      </>
    ),
    Svg: require('@site/static/img/user-police-tie-duotone.svg').default,
    link: '/docs/leo/apply',
    description: (
      <>
        How to get started as a Law Enforcement Officer on the Kelly County Department of Justice RP Fivem Server.
      </>
    ),
  },
  {
    title: (
      <>
        <a href="/docs/introduction/getting-started">First Join : Getting Started</a>
      </>
    ),
    Svg: require('@site/static/img/right-to-bracket-duotone.svg').default,
    link: '/docs/introduction/getting-started',
    description: (
      <>
        Are you a brand new member looking on how to get started on the Kelly County Department of Justice RP? This is the place for you!
      </>
    ),
  },
  {
    title: (
      <>
        <a href="/docs/introduction/rules">Rules & TOS</a>
      </>
    ),
    Svg: require('@site/static/img/scale-balanced-duotone.svg').default,
    description: (
      <>
        Be sure to familiarize yourself with the rules and terms of service for server and follow them!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
