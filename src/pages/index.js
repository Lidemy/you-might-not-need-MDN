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
              <li><Link to="/docs/basic/variable">基本語法</Link></li>
              <li><Link to="/docs/new-syntax/template">ES6</Link></li>
              <li><Link to="/docs/object/freeze">物件</Link></li>
              <li><Link to="/docs/array/concat">陣列</Link></li>
              <li><Link to="/docs/string/charCodeAt">字串</Link></li>
            </ul>
          </div>
          <div class="col col--8">
            <p>MDN 是一個很棒的網站，上面有著豐富的資源跟各種 web 相關的文件。
            在碰到問題時，有許多人都會建議透過查詢 MDN 來解決問題，或是看一下各個內建函式的詳細介紹。
            </p>
            <p>
              MDN 比較像是字典，對於每一個函式都有著詳細的解釋，
              例如說參數有幾個、名稱是什麼、回傳值是什麼，以及有哪些不同的用法。
              它的詳細程度大概僅次於語言本身提供的規格書了。
            </p>
            <p>
              可是有時候你其實需要的不是字典，而是有點類似國高中時講義會附上的小表格，上面寫著各種常考的數學公式。例如說 [1,2,3].sort()，
              你知道要傳入一個 compare function，要回傳正數、負數或是 0，但你忘記要怎樣回傳才是從小排到大。
            </p>
            <p>
              在這種時候，我們覺得你不一定需要 MDN。說不定你需要的只是一兩個範例跟簡單的解釋，就能夠解決你手邊的問題。
            </p>
            <p>
            所以這個網站之所以取名叫 You Might Not Need MDN，並不是我們討厭 MDN，也不是我們覺得它沒有用，正好相反，我們很喜歡它也很常用它，但有些時候我們只想查一些很常忘記的用法，而不是去看整個函式的詳細文件。
            </p>
            <p>
              這就是為什麼會有這個網站了，希望能提供類似 cheat sheet 的東西，提供各種常見的語法以及內建函式的簡易範例，讓你在忘記時能夠快速查詢。如果你想要更複雜的例子或是完全理解怎麼辦？那就去看 MDN 吧！挑選適合的工具，在適合的時機。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

