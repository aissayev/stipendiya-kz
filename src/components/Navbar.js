import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components';

const LogoHeader = styled.div`
  color: #143B39;
  padding: 1rem;
  font-weight: 600;
  font-size: 20px;
`

const NavLink = styled.span`
  cursor: pointer;
`

const SplashContainer = styled.div`
  background-color: #F8F5F1;
  width: 400px;
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">

          {/* 1. Logo - StipendiyaKz
              2. Nav links -> create separate component
              3. Search field -> create search component
          */}

          <div className="navbar-brand">
            {/* TODO STORY - Add logo Image for the logo */}
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link> */}
            {/* Hamburger menu */}
            <LogoHeader>Stipendya KZ</LogoHeader>


            <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-end has-text-centered">
              <div className="navbar-item"> <NavLink>О проекте</NavLink> </div>
              <div className="navbar-item"> <NavLink>Новости</NavLink></div>
              <div className="navbar-item"> <NavLink> Гранты и стипендии</NavLink></div>
              <div className="navbar-item"> <NavLink> Услуги</NavLink></div>
              <div className="navbar-item"> <NavLink> Вдохновение</NavLink></div>

              <div className="navbar-item">
                  <span className="icon"> <NavLink> <i className="fas fa-search"></i></NavLink></span>
              </div>


              {/* TODO Гранты и стипендии*/}
              {/*<div className="navbar-item has-dropdown is-hoverable">*/}
              {/*  <Link className="navbar-link">*/}
              {/*    Гранты и стипендии*/}
              {/*  </Link>*/}
              {/*  */}
              {/*  <div className="navbar-dropdown">*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Бакалавриат*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Магистратура*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Онлайн курсы*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/* TODO Опыт */}
              {/*<div className="navbar-item has-dropdown is-hoverable">*/}
              {/*  <Link className="navbar-link">*/}
              {/*  Опыт*/}
              {/*  </Link>*/}
              {/*  */}
              {/*  <div className="navbar-dropdown">*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Стажировка*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Волонтерство*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Конференции*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*TODO Услуги*/}
              {/*<div className="navbar-item has-dropdown is-hoverable">*/}
              {/*  <Link className="navbar-link">*/}
              {/*  Услуги*/}
              {/*  </Link>*/}
              {/*  */}
              {/*  <div className="navbar-dropdown">*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Консультанство по поступлению*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Сопровождение по сбору документов*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Правка и перевод мотивационеёного письма*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Написание работ на английском языке*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/* TODO Вдохновение*/}
              {/*<div className="navbar-item has-dropdown is-hoverable">*/}
              {/*  <Link className="navbar-link">*/}
              {/*  Вдохновение*/}
              {/*  </Link>*/}
              {/*  */}
              {/*  <div className="navbar-dropdown">*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Полезные советы*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Истории успеха*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Мотивационные цитаты*/}
              {/*    </Link>*/}
              {/*    <Link className="navbar-item">*/}
              {/*      Топ Университеты Мира*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</div>*/}

            </div>
{/* TODO add icons for social media */}
            {/* <div className="navbar-end has-text-centered">
                something
                <span className="icon"><i className="fas fa-home"></i></span>
            </div> */}


          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
