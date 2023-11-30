import React from "react";
import styled from "styled-components";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

export const Profile = ({ data, rank }) => {
  const handleCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.innerText = data.referral;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.replaceWith();
    toast.success("Copied!", {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      pauseOnFocusLoss: false,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer />
      <ProfileContainer>
        <div className="heading">Personal Details</div>
        <div className="referral-code-wrapper">
          {data.isAdmin ? (
            <span>ADMIN USER : {data.name}</span>
          ) : (
            <>
              <span>Referral code</span>
              <span>:</span>
              <span>{data.referral}</span>
              <MdOutlineContentCopy onClick={handleCopy} />
            </>
          )}
        </div>

        {data.isAdmin ? null : (
          <>
            <div className="wrapper">
              <div className="points">
                <div className="title">Points</div>
                <div className="amount">{data.points}</div>
              </div>
              <div className="invites">
                <div className="title">Invites</div>
                <div className="amount">{data.invites}</div>
              </div>
              <div className="rank">
                <div className="title">Rank</div>
                <div className="amount">{rank}</div>
              </div>
            </div>
          </>
        )}
        <div className="data-list">
          <div className="data">
            <div className="key">Name</div>
            <div className="seperator">:</div>
            <div className="value">{data.name}</div>
          </div>
          <div className="data">
            <div className="key">Gender</div>
            <div className="seperator">:</div>
            <div className="value">{data.gender}</div>
          </div>
          <div className="data">
            <div className="key">Birth Year</div>
            <div className="seperator">:</div>
            <div className="value">{data.dob}</div>
          </div>
          <div className="data">
            <div className="key">Phone</div>
            <div className="seperator">:</div>
            <div className="value">{data.phone}</div>
          </div>
          <div className="data">
            <div className="key">E-mail</div>
            <div className="seperator">:</div>
            <div className="value">{data.email}</div>
          </div>
          <div className="data">
            <div className="key">College</div>
            <div className="seperator">:</div>
            <div className="value">{data.college}</div>
          </div>
          <div className="data">
            <div className="key">College State</div>
            <div className="seperator">:</div>
            <div className="value">{data.collegeState}</div>
          </div>
          <div className="data">
            <div className="key">Passing year</div>
            <div className="seperator">:</div>
            <div className="value">{data.passingYear}</div>
          </div>
        </div>
      </ProfileContainer>
    </>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #a3724f;
  box-shadow: 4px 6px 0px 0px rgba(114, 62, 48, 0.8);
  font-weight: 500;
  font-size: 1vmax;
  @media screen and (max-width: 820px) {
    font-size: 1.6vmax;
  }
  text-align: center;
  padding: 20px 40px;
  .heading {
    font-size: 1.4vmax;
    position: relative;
    width: fit-content;
    padding: 10px 0px;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: var(--light1, #e6d6b5);
    }
  }
  .referral-code-wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    border: 1px solid var(--light1, #e6d6b5);
    background: var(--dark2, #a3724f);
    padding: 4px 8px;
    user-select: none;
    > svg {
      width: 15%;
      cursor: pointer;
      transition: all ease 0.2s;
      &:hover {
        scale: 1.2;
      }
    }
  }
  .wrapper {
    display: flex;
    width: 80%;
    justify-content: space-between;
    > div {
      border-radius: 4px;
      border: 1px solid var(--light1, #e6d6b5);
      background: var(--dark2, #a3724f);
      padding: 4px 12px;
    }
    .amount,
    .title {
      text-align: center;
    }
  }
  .data-list {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .data {
      display: grid;
      grid-template-columns: 40% 10px 1fr;
      .key {
        text-align: left;
      }
      .value {
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-left: 10px;
        text-align: center;
      }
    }
  }
`;
