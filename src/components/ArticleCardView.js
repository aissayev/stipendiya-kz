import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CardContainer = styled.div`
    width: 280px;
    height: 475px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 7px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); 
    }
`

const CardImage = styled.div`
    height: 40%;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const CardText = styled.div`
    height: 40%;
    margin: auto;
    width: 80%;
    font-size: 14px;
    display: flex;
    align-items: center;
`

const CardButton = styled.div`
    margin: auto;
    width: 90%;
    margin-top: 1rem;
`



const ArticleCardView = (data) => {
    console.log('Article Card View data, ', data);
    return (
        <CardContainer>
            <CardImage>
                <Img
                    style={{ height: "100%", width: "100%", borderRadius: "9px"}}
                    imgStyle={{ objectFit: "cover"}}
                    fluid={data.imageFluid.childImageSharp.fluid}>
                </Img>
            </CardImage>
            <CardText>
                <span>Здесь вы найдете самую полную и интересную информацию по бесплатной 
                учебе или поиску работы за границей. Наша платформа заточена под граждан Казахстана, поэтому...</span>
            </CardText>
            <CardButton>
                <button style={{ width: "100%", backgroundColor: "#50C6AA", color: "white", fontSize: "14px"}} className="button is-medium">Читать дальше</button>
            </CardButton>
        </CardContainer>
    )
}

export default ArticleCardView