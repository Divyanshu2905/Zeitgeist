import React from "react";
import styled from "styled-components";
export const EventCard = () => {
  return (
    <CardContainer>
      <div class="bg">
        <div class="stars-initial">
          <img src="Vector.png" height="14px" width="14px" />
          <img src="Vector.png" height="14px" width="14px" />
          Cultural
          <img src="Vector.png" height="14px" width="14px" />
          <img src="Vector.png" height="14px" width="14px" />
          <hr class="line" />
        </div>
        <div class="heading">
          {" "}
          <center>
            {" "}
            <img src="reg button.png" width="205.56px" height="43.41px" />{" "}
          </center>
        </div>
        <div class="text1">
          {" "}
          <center> Solo/Duet Dance </center>
        </div>
        <div class="text2">
          {" "}
          <center> ONLINE </center>
        </div>
        <center>
          <img src="Frame 12019.png" width="148px" height="180px" />
        </center>
        <div class="text3">
          {" "}
          <center> POC: Shruti Gupta </center>
        </div>

        <div class="bg2">
          <div class="icon">
            <i class="fa fa-download"></i>{" "}
          </div>
          Rulebook{" "}
        </div>

        <div class="button2">
          <div class="bg2"> Register </div>{" "}
        </div>

        <hr class="line2" />
        <div class="stars-end">
          <img src="Vector.png" height="14px" width="14px" />
          <img src="Vector.png" height="14px" width="14px" />
          <img src="Vector.png" height="14px" width="14px" />
          <img src="Vector.png" height="14px" width="14px" />
          <img src="Vector.png" height="14px" width="14px" />
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  .bg {
    width: 286px;
    height: 508.16px;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FEventCard.png?alt=media&token=cc685d5a-68c5-4dc0-9ea0-e709a41bae49");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .stars-initial {
    width: 170.29px;
    height: 24px;
    padding-top: 25.32px;
    padding-left: 75px;
    font-family: "oleo script swash caps";
    color: crimson;
    font-weight: bold;
    column-count: 5;
  }
  .stars-end {
    width: 130px;
    padding-left: 75px;
    column-count: 5;
    height: 30px;
  }

  hr.line {
    border-top: 0.5px solid brown;
    width: 135px;
    margin: 0px;
  }
  hr.line2 {
    border-top: 0.5px solid brown;
    width: 140px;
    margin-left: 70px;
    margin-top: 20px;
  }
  .heading {
    margin-top: 12px;
  }
  .text1 {
    font-family: "Jost";
    font-style: medium-italic;
    font-size: 17px;
  }
  .text2 {
    padding-top: 5px;
    font-style: italic;
    font-size: 13px;
    padding-bottom: 5px;
  }
  .text3 {
    padding-top: 2.2px;
    font-family: "Jost";
    font-style: italic;
    font-size: 17px;
    padding-bottom: 5px;
  }
  .bg2 {
    margin-left: 90px;
    background-color: #723e30;
    color: white;
    font-family: "Viga";
    width: 105px;
    height: 26px;
    font-size: 19px;
    padding-top: 2px;
  }
  .button2 {
    padding-top: 13px;
    margin-left: 10px;
  }
  .icon {
    float: left;
    padding-right: 8px;
  }
`;
