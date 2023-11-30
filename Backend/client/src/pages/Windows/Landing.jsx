import React from "react";
import "./Landing.css";
import { LandingButton } from "../components/Buttons/LandingButton";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="firstlayer">
      <div className="secondlayer">
        <div className="thirdlayer">
          <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FLights.png?alt=media&token=d18ec135-61d6-404d-9cb1-28ab2c1f512b" alt="" />
          <div id="zeitgeist">
            <div className="z">Zeitgeist</div>
          </div>
          <div id="zeitgeist2" className="zeitgeist2">
            <div className="window">
              <div className="menu-bar">
                <div className="top">
                  <div className="current">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2Fcross.png?alt=media&token=55d24cad-f616-4d53-99fb-6f9d39403fe6" alt="" />
                  </div>
                  <div className="new-tab">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2Fplus.png?alt=media&token=d355a2d0-db7c-46f6-9f41-fd60e61516fb" alt="" />
                  </div>
                  <div className="btns">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2Fclose_minimize.png?alt=media&token=fc6d1ad9-bb12-49a7-8d17-9f6387ffd4f6" alt="" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="navigation">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2Farrows.png?alt=media&token=c75e6ddb-8e23-46b2-9a2c-9b9ba171bf88" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2Freload.png?alt=media&token=1493c70a-8e9a-4c3f-8729-ec191040d4c7" alt="" />
                  </div>
                  <div className="url-bar">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FVector9.png?alt=media&token=4cae073b-0d9e-4a62-a4d8-e82917b57b6a" alt="" />
                  </div>
                </div>
              </div>
              <div className="content-section">
                <div style={{display: "flex", padding: "10%", width: "100%"}}>
                  <LandingButton className='export' text='Website' onclick={()=>{ navigate("/home")}}></LandingButton>
                  <LandingButton className='export' text='CA Portal' onclick={() => { navigate("/campus-ambassador") }}></LandingButton>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="buttonlayer">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FGroup%20392.png?alt=media&token=305e4ce0-a9a4-49c0-829d-2a11499cb0c3"
            style={{ height: "5vh", marginRight: "2vw" }}
          ></img>
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FVector.png?alt=media&token=8a2686f6-fd16-42c6-a20d-45aba0c101e3"
            style={{ height: "35px", width: "35px" }}
          ></img>
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FVector.png?alt=media&token=8a2686f6-fd16-42c6-a20d-45aba0c101e3"
            style={{ height: "35px", width: "35px" }}
          ></img>
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FVector.png?alt=media&token=8a2686f6-fd16-42c6-a20d-45aba0c101e3"
            style={{ height: "35px", width: "35px" }}
          ></img>
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FVector.png?alt=media&token=8a2686f6-fd16-42c6-a20d-45aba0c101e3"
            style={{ height: "35px", width: "35px" }}
          ></img>
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FLanding%2Fresources%2FVector.png?alt=media&token=8a2686f6-fd16-42c6-a20d-45aba0c101e3"
            style={{
              height: "50px",
              width: "50px",
              border: "solid 10px #443A36",
              borderRadius: "25px",
              marginLeft: "2vw",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
