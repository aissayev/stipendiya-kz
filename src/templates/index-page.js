import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
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
            imgStyle={{ objectFit: "cover"}}
            fluid={myData.image.childImageSharp.fluid}></Img>
        </HeroImageContainer>

    </Hero>


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
