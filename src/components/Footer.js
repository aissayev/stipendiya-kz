import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 30vh;
  background-color: red;
  display: flex;
`

const SectionOne = styled.div`
  background-color: #123B38;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SectionOneLinks = styled.div`
  padding-left: 30%;
  display: flex;
  flex-direction: column;
`

const SectionOneStipendiyaLink = styled.a`
  font-size: 1.5rem;
  text-decoration: underline;
  color: white;
  margin-bottom: 1rem;

  &:hover {
    color: white;
  }
`

const SectionOneLink = styled.a`
  color: white;
  margin-bottom: 1rem;

  &:hover {
    color: white;
  }
`

const SectionTwo = styled.div`
  background-color: #202020;
  flex: 2;
  display: flex;
`

const SectionTwoCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SectionTwoColEmpty = styled.div`
  flex: 2;
` 

const Footer = class extends React.Component {
  render() {
    return (
      <FooterContainer>

        <SectionOne>
          <SectionOneLinks>
            <SectionOneStipendiyaLink>Stipendiya KZ</SectionOneStipendiyaLink>
            <SectionOneLink>Оставить заявку</SectionOneLink>
            <SectionOneLink>Админ</SectionOneLink>
          </SectionOneLinks>
        </SectionOne>

        <SectionTwo>
          <SectionTwoCol>
            <SectionOneLinks>
              <SectionOneLink>О проекте</SectionOneLink>
              <SectionOneLink>Вдохновение</SectionOneLink>
              <SectionOneLink>Новости</SectionOneLink>
            </SectionOneLinks>
          </SectionTwoCol>
          <SectionTwoCol>
            <SectionOneLinks>
                <SectionOneLink>Гранты и стипендии</SectionOneLink>
                <SectionOneLink>Услуги</SectionOneLink>
                <SectionOneLink>Опыт</SectionOneLink>
              </SectionOneLinks>
          </SectionTwoCol>
          <SectionTwoColEmpty></SectionTwoColEmpty>

        </SectionTwo>

      </FooterContainer>
      // <footer className="footer has-background-black has-text-white-ter">
      //   {/* <div className="content has-text-centered">
      //     <img
      //       src={logo}
      //       alt="Kaldi"
      //       style={{ width: '14em', height: '10em' }}
      //     />
      //   </div> */}
      //   <div className="content has-text-centered has-background-black has-text-white-ter">
      //     <div className="container has-background-black has-text-white-ter">
      //       <div style={{ maxWidth: '100vw' }} className="columns">
      //         <div className="column is-4">
      //           <section className="menu">
      //             <ul className="menu-list">
      //               {/* <li>
      //                 <Link to="/" className="navbar-item">
      //                   Home
      //                 </Link>
      //               </li> */}
      //               <li>
      //                 <Link className="navbar-item" to="/about">
      //                   О проекте
      //                 </Link>
      //               </li>
      //               {/* <li>
      //                 <Link className="navbar-item" to="/products">
      //                   Products
      //                 </Link>
      //               </li> */}
      //               {/* <li>
      //                 <Link className="navbar-item" to="/contact/examples">
      //                   Form Examples
      //                 </Link>
      //               </li> */}
      //               <li>
      //                 <a
      //                   className="navbar-item"
      //                   href="/admin/"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                 >
      //                   Админ
      //                 </a>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4">
      //           <section>
      //             <ul className="menu-list">
      //               <li>
      //                 <Link className="navbar-item" to="/blog">
      //                   Новое
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact">
      //                   Контакты
      //                 </Link>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4 social">
      //           <a title="facebook" href="https://facebook.com">
      //             <img
      //               src={facebook}
      //               alt="Facebook"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="twitter" href="https://twitter.com">
      //             <img
      //               className="fas fa-lg"
      //               src={twitter}
      //               alt="Twitter"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="instagram" href="https://instagram.com">
      //             <img
      //               src={instagram}
      //               alt="Instagram"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="vimeo" href="https://vimeo.com">
      //             <img
      //               src={vimeo}
      //               alt="Vimeo"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </footer>
    )
  }
}

export default Footer
