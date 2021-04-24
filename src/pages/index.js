import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <div class="intro container">
        <div class="row">
          <div class="col col--4">
            <ul>
              <li><Link to="/docs/variable">基本語法</Link></li>
              <li><Link to="/docs/new-syntax/template">ES6</Link></li>
              <li><Link to="/docs/object/assign">物件</Link></li>
              <li><Link to="/docs/array/concat">陣列</Link></li>
              <li><Link to="/docs/string/chatCodeAt">字串</Link></li>
            </ul>
          </div>
          <div class="col col--8">
            { siteConfig.tagline } 一開始接觸 JavaScript 有可能對程式語言還不甚熟悉，正式文件的閱讀難度還是很高，希望打造一個更入門的 Cheat Sheet 文件供新手學習。
          </div>
        </div>
      </div>
    </Layout>
  );
}

