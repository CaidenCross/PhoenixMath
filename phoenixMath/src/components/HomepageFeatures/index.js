import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'add bundles here',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    url: '',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea com
      </>
    ),
  },
  {
    title: 'about me page',
    Svg: require('@site/static/img/Robot.svg').default,
    url: '',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea com
      </>
    ),
  },
  {
    title: 'movie activties',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    url: '',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea com
      </>
    ),
  },
  {
    title: 'Seasonal',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    url: 'http://localhost:3000/docs/co-operative-learning/seasonal',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea com
      </>
    ),
  },
  {
    title: 'grade levels',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    url: '',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
      </>
    ),
  },
  {
    title: 'featured items/new',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    url: '',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea com
      </>
    ),
  },
];

function Feature({Svg, title, url, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}><Svg className={styles.featureSvg} role="img" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={url}><h3>{title}</h3></a>
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
