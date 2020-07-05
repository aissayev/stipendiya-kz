import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* TODO STORY - Add logo Image for the logo */}
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link> */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                  Гранты и стипендии
                </Link>
                
                <div className="navbar-dropdown">
                  <Link className="navbar-item">
                    Бакалавриат
                  </Link>
                  <Link className="navbar-item">
                    Магистратура
                  </Link>
                  <Link className="navbar-item">
                    Онлайн курсы
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                Опыт
                </Link>
                
                <div className="navbar-dropdown">
                  <Link className="navbar-item">
                    Стажировка
                  </Link>
                  <Link className="navbar-item">
                    Волонтерство
                  </Link>
                  <Link className="navbar-item">
                    Конференции
                  </Link>
                </div>
              </div>

              
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                Услуги
                </Link>
                
                <div className="navbar-dropdown">
                  <Link className="navbar-item">
                    Консультанство по поступлению
                  </Link>
                  <Link className="navbar-item">
                    Сопровождение по сбору документов
                  </Link>
                  <Link className="navbar-item">
                    Правка и перевод мотивационеёного письма
                  </Link>
                  <Link className="navbar-item">
                    Написание работ на английском языке
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                Вдохновение
                </Link>
                
                <div className="navbar-dropdown">
                  <Link className="navbar-item">
                    Полезные советы
                  </Link>
                  <Link className="navbar-item">
                    Истории успеха
                  </Link>
                  <Link className="navbar-item">
                    Мотивационные цитаты
                  </Link>
                  <Link className="navbar-item">
                    Топ Университеты Мира
                  </Link>
                </div>
              </div>
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
