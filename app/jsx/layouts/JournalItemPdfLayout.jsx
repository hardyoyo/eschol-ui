// ##### About Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import Subheader2Comp from '../components/Subheader2Comp.jsx'
import NavBarComp from '../components/NavBarComp.jsx'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubLocationComp from '../components/PubLocationComp.jsx'
import PubDataComp from '../components/PubDataComp.jsx'
import JumpComp from '../components/JumpComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalItemPdfLayout extends React.Component {
  render() {
    return (
      <div>
        <a href="#maincontent" className="c-skipnav">Skip to main content</a>
        <Header2Comp />
        <Subheader2Comp />
        <NavBarComp />
        <nav className="c-breadcrumb">
          <a href="">eScholarship</a>
          <a href="">Campus Name</a>
          <a href="">Unit Name</a>
          <a href="">Series Name</a>
          <a className="c-breadcrumb-link--active" href="">From the New Heights</a>
        </nav>
        <div className="c-columns">
          <main id="maincontent">
            <div className="c-tabs">
              <div className="c-tabs__tabs">
                <button className="c-tabs__button-more">...</button>
                <button className="c-tabs__button--active">Main Content</button>
              </div>
              <div className="c-tabs__content">
                <ItemActionsComp />
                <h1 className="c-tabcontent__heading">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h1>
                <AuthorListComp />
                <PubLocationComp />
                <PubDataComp />
                <details className="c-togglecontent" open>
                  <summary>Abstract</summary>
                  <p>Eum nihil quidem nisi sapiente vel obcaecati esse vero placeat! Dicta fugiat quam, nemo accusamus cum, non voluptas sit eveniet. Voluptates odio consectetur eum dicta vel at rerum accusamus inventore officiis, voluptate deleniti et reiciendis aliquam illo eaque laborum neque excepturi pariatur unde obcaecati molestiae dolores voluptas non earum minima.</p>
                  <div className="c-well">
                    Many UC-authored scholarly publications are freely available on this site because of the UC Academic Senate’s Open Access Policy. <a className="o-textlink__secondary" href="">Let us know how this access is important for you</a>.
                  </div>
                </details>
                <details className="c-togglecontent" open>
                  <summary>Main Content</summary>
                  <div>
                    [PDF content to go here]
                  </div>
                </details>
              </div>
            </div>
          </main>
          <aside>
            <section className="o-columnbox2">
              <header>
                <h2>Jump To</h2>
                <JumpComp />
              </header>
            </section>
            <section className="o-columnbox2">
              <header>
                <h2>Related Items</h2>
              </header>
              <p><a className="o-textlink__secondary" href="">Collaborative Film Authorship: Writing Latinas Into the Picture</a><br/>CSW update</p>
              <p><a className="o-textlink__secondary" href="">Sporting Bodies, Displaying History: Black Embodiment</a><br/>UCLA Electronic Theses and Dissertations</p>
              <p><a className="o-textlink__secondary" href="">United States-Based Latina Producers of Feature Films</a><br/>UCLA Electronic Theses and Dissertations</p>
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = JournalItemPdfLayout;
