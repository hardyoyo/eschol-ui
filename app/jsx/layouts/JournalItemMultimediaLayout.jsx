// ##### Journal Item Multimedia Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import SubheaderComp from '../components/SubheaderComp.jsx'
import MEDIA_PATH from '../../js/MediaPath.js'
import NavBarComp from '../components/NavBarComp.jsx'
import ShareComp from '../components/ShareComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubInfoComp from '../components/PubInfoComp.jsx'
import MediaViewerComp from '../components/MediaViewerComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import RelatedItemsComp from '../components/RelatedItemsComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalItemMultimediaLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <SubheaderComp bannerLink={'https://escholarship.org/uc/ucbclassics_bujc'} unitTitle={'Berkeley Undergraduate Journal of Classics'} bannerUrl={'https://escholarship.org/assets/c6efb9a478093370f05eb67c08b132b74570d848571548c3a320c213183ff1dd'} isWide={false} />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <ul>
            <li><a href="">eScholarship</a></li>
            <li><a href="">Campus Name</a></li>
            <li><a href="">Unit Name</a></li>
            <li><a href="">Series Name</a></li>
            <li><a className="c-breadcrumb-link--active" href="">From the New Heights</a></li>
          </ul>
        </nav>
        <div className="c-columns--sticky-sidebar">
          <main id="maincontent" tabIndex="-1">
            <div className="c-itemactions">
              <div className="o-download">
                <a href="" className="o-download__button" download>Download PDF</a>
                <details className="o-download__formats">
                  <summary aria-label="formats"></summary>
                  <ul className="o-download__nested-menu">
                    <li className="o-download__nested-list1">
                      Main
                      <ul>
                        <li><a href="">PDF</a></li>
                        <li><a href="">ePub</a></li>
                        <li><a href="">HTML</a></li>
                      </ul>
                    </li>
                    <li className="o-download__nested-list2">
                      Citation
                      <ul>
                        <li><a href="">RIS</a></li>
                        <li><a href="">BibText</a></li>
                        <li><a href="">EndNote</a></li>
                        <li><a href="">RefWorks</a></li>
                      </ul>
                    </li>
                    <li className="o-download__nested-list3">
                      Supplemental Material
                      <ul>
                        <li><a href="">Image</a></li>
                        <li><a href="">Audio</a></li>
                        <li><a href="">Video</a></li>
                        <li><a href="">Zip</a></li>
                        <li><a href="">File</a></li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </div>
              <ShareComp />
            </div>
            <h1 className="o-heading1a">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h1>
            <AuthorListComp />
            <PubInfoComp />
            <div className="c-tabs">
              <div className="c-tabs__tabs">
                <button className="c-tabs__button--active">Main Content</button>
              </div>
              <div className="c-tabs__content">
                <details className="c-togglecontent" open>
                  <summary>Abstract</summary>
                  <p>Eum nihil quidem nisi sapiente vel obcaecati esse vero placeat! Dicta fugiat quam, nemo accusamus cum, non voluptas sit eveniet. Voluptates odio consectetur eum dicta vel at rerum accusamus inventore officiis, voluptate deleniti et reiciendis aliquam illo eaque laborum neque excepturi pariatur unde obcaecati molestiae dolores voluptas non earum minima.</p>
                  <div className="c-well">
                    Many UC-authored scholarly publications are freely available on this site because of the UC Academic Senate’s Open Access Policy. <a href="">Let us know how this access is important for you</a>.
                  </div>
                </details>
                <details className="c-togglecontent" open>
                  <summary>Main Content</summary>
                  <MediaViewerComp />
                </details>
              </div>
            </div>
          </main>
          <aside>
            <JumpComp />
            <section className="o-columnbox1">
              <header>
                <h2>Related Items</h2>
              </header>
              <RelatedItemsComp />
            </section>
          </aside>
        </div>
        <div className="c-toplink">
          <a href="#top">Top</a>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = JournalItemMultimediaLayout;
