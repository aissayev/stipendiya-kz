import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ArticleCardView from '../components/ArticleCardView'
import styled from 'styled-components'

import Img from 'gatsby-image'

const Hero = styled.section`
  width: 100%;
  height: 40vh;
  background-color: #F8F5F1;
  display: flex;
`

const HeroImageContainer = styled.div`
  height: 100%;
  width: 50%;
`

const HeroTextContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeroTextLog = styled.div`
  color: #143B39;
  font-size: 64px;
  font-weight: 700;
  padding: 1rem;
`

const HeroText = styled.span`
  max-width: 400px;
  font-weight: bold;
  text-align: center;
  padding: 0.25rem 0 2rem 0;
`

const About = styled.section`
  width: auto;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
`

const AboutHeader = styled.h2`
  width: 100%;
  text-align: center;
  padding: 4rem;
`

const AboutSection = styled.section`
  width: 100%;
  min-height: 100px;
  display: flex;
  margin: 1rem 0;
`

const AboutMissionTextContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`

const AboutMissionText = styled.div`
  padding: 3rem 1rem 3rem 1rem;
  border: 1px solid black;
  border-left: 0;
  border-right: 0;
  display: flex;
  flex-direction: column;
`

const AboutMissionImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  alighItems: center;
`

const AboutMissionImage = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 10% 0 10%;
  display: flex;
  align-items: center;
`

const SectionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const SectionTextHeading = styled.h2`
  margin-bottom: 1rem;
`

const SectionTextParagraph = styled.p`
  margin: 0 1rem 1rem 0;
`


const News = styled.section`
  background-color: #F8F5F1;
  width: 100%;
`
const NewsHeader = styled.h2`
  width: 100%;
  text-align: center;
  padding: 4rem;
`

const NewListView = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 6rem;
`



export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>


    {/*<section className="columns">*/}

    {/*</section>*/}


    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>

                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Новое
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Читать еще...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

// const IndexPage = ({ data }) => {
  const IndexPage = () => {
  // const { frontmatter } = data.markdownRemark

  const myData = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory : { eq: "home"}}) {
        nodes {
          id
          name
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      articleImages: allFile(filter: { relativeDirectory : { eq: "articles"}}) {
        nodes {
          id
          name
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      } 
      image: file(relativePath: {eq: "home/splash.jpeg"}) {
        id
        childImageSharp {
          fixed(
            width: 500
            duotone: { highlight: "ff0000", shadow: "#222222"}
          ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log('myData', myData);

  const aboutImage1 = myData.images.nodes.find( i => i.name === 'project_mission');
  const aboutImage2 = myData.images.nodes.find( i => i.name === 'about2');
  const aboutImage3 = myData.images.nodes.find( i => i.name === 'about3');

  const articleImage1 = myData.articleImages.nodes.find( i => i.name === 'article3');
  console.log('projectMisiosn', aboutImage1);

  return (
    <Layout>
      <Hero>
        <HeroTextContainer>
          <HeroTextLog>Stipendiya KZ</HeroTextLog>
          <HeroText>Платформа для казахстанцев, желающих бесплатно учиться или работать за границей</HeroText>
          <button className="button is-danger is-medium">Узнать подробнее</button>
        </HeroTextContainer>

        <HeroImageContainer>
          <Img 
            style={{ height: "100%", width: "100%"}}
            imgStyle={{ height: "100%", width: "100%", objectFit: "cover"}}
            fluid={myData.image.childImageSharp.fluid}></Img>
        </HeroImageContainer>
      </Hero>

      <About>
        <AboutHeader>О проекте</AboutHeader>
        <AboutSection>
          <AboutMissionTextContainer>
            <AboutMissionText>
              <SectionTextHeading>Миссия проекта</SectionTextHeading>
              <SectionTextParagraph>Миссия проекта stipendiya.kz заключается в том, чтобы помочь талантливым 
                людям из Казахстана найти бесплатные возможности для получения качественного 
                образования мирового стандарта и предоставить исчерпывающую информацию о проектах 
                и стажировках за границей.</SectionTextParagraph>
            </AboutMissionText>
          </AboutMissionTextContainer>

          <AboutMissionImageContainer>
            <Img
                style={{ maxHeight: "492px", width: "80%", borderRadius: "9px", marginLeft: "20%"}}
                imgStyle={{ objectFit: "cover"}}
                fluid={aboutImage1.childImageSharp.fluid}>
              </Img>
          </AboutMissionImageContainer>
        </AboutSection>

        <AboutSection>
            <AboutMissionImageContainer>
              <Img
                  style={{ maxHeight: "492px", width: "80%", borderRadius: "9px",}}
                  imgStyle={{ objectFit: "cover"}}
                  fluid={aboutImage2.childImageSharp.fluid}>
                </Img>
            </AboutMissionImageContainer>
            <SectionTextContainer>
              <SectionTextHeading>Чем он отличается от других?</SectionTextHeading>
                <SectionTextParagraph>Вся информация подобрана специально для Казахстана. Больше не нужно проверять, 
                  имеете ли вы право подавать на программу: все возможности, описанные на stipendiya.kz, 
                  предусматривают подачу жителей из Казахстана.</SectionTextParagraph>
                <SectionTextParagraph>
                  Вся информация на платформе бесплатная. 
                  Вам не нужно платить за подписку или рассылку.В отличие от пабликов в Telegram, Instagram 
                  и Facebook, информация на stipendiya.kz разложена по полочкам и легче воспринимается. Больше 
                  не нужно путаться между вкладками и тратить свое время.
                </SectionTextParagraph>
                <SectionTextParagraph>
                  Если вы сомневаетесь в своих силах, мы можем вам помочь. Просто ознакомьтесь с Услугами и 
                  свяжитесь с нами, если у вас есть интерес.
                </SectionTextParagraph>
            </SectionTextContainer>          
        </AboutSection>

        <AboutSection>
          <SectionTextContainer>
            <SectionTextHeading>Есть предложения?</SectionTextHeading>
              <SectionTextParagraph>Если у вас имеются мысли о том, как можно улучшить нашу платформу, информация
                 о стипендиальных программах, стажировках и проектах, или просто интересные мысли - заполните 
                 контактную форму, и мы обязательно вам ответим :)</SectionTextParagraph>
              <SectionTextParagraph>
                Сделаем мечту реальностью вместе!
              </SectionTextParagraph>
              <button style={{ width: "30%", marginTop: "2rem"}} className="button is-medium is-danger about-button">Оставить заявку</button>
          </SectionTextContainer>  

          <AboutMissionImageContainer>
              <Img
                  style={{ maxHeight: "492px", width: "80%", borderRadius: "9px", marginLeft: "20%"}}
                  imgStyle={{ objectFit: "cover"}}
                  fluid={aboutImage3.childImageSharp.fluid}>
              </Img>
          </AboutMissionImageContainer> 
        </AboutSection>
      </About>

      <News>
        <NewsHeader>Новости</NewsHeader>
        <NewListView>
          {
            myData.articleImages.nodes.map((image, index) => {
              return <ArticleCardView key={index} imageFluid={image}></ArticleCardView>
            })
          }
        
        </NewListView>
      </News>


      {/* <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      /> */}

    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `

const styles = {
  
}
