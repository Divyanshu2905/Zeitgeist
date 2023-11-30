import React from 'react'
import { styled } from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export const SideLines = ({ iconsPresent }) => {
    return (
        <Container>
            <div className="left-sideline">
                {
                    iconsPresent ? (
                        <>
                            <div className="line"></div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/zeitgeist.iitrpr?mibextid=ZbWKwL" target='_blank' ><FaFacebook/></a>
                                <a href="https://twitter.com/Zeitgeist_rpr?t=PM5KFpsToXu7FEZdTJwWlA&s=08" target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg></a>
                                <a href="https://instagram.com/zeitgeist_iitrpr?igshid=MzRlODBiNWFlZA==" target='_blank' ><FaInstagram/></a>
                                <a href="https://www.linkedin.com/company/zeitgeist-iit-ropar/" target='_blank' ><FaLinkedin/></a>
                                <a href="https://youtube.com/@ZeitgeistIITRopar?feature=shared" target='_blank' ><FaYoutube/></a>
                            </div>
                        </>
                    ) : null
                }

                <div className="line"></div>
            </div>
            <div className="right-sideline">
                <div className="line"></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    .line{
        width: 2px;
        height: 100%;
    }
    .left-sideline{
        padding-left: 7.5vw;
        display: flex;
        flex-direction: column;
        gap: 12px;
        .line:first-child{
            height: 10vh;
            /* @media screen and (max-width:425px ){
                height: 30vh;
            } */
        }
        .line:last-child{
            flex: 1;
        }
        .social-icons{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 20px;
            width: min(36px, 5vmin);
            height: 30vh;
            max-height: 30vh;
            translate: -50%;
            svg{
                fill: #f8f2d8;
                width: 100%;
                height: 26px;
                mix-blend-mode: difference;
            }
        }
    }
    .right-sideline{
        padding-right: 7.5vw;
    }
`