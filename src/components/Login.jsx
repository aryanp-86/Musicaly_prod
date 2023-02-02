import React from "react";
import styled from "styled-components";
import Musicaly from "../Musicaly.png"
import Animation from "../Animation";
export default function Login() {
  const handleClick = async () => {
    const client_id = "Client ID comes here";
    const redirect_uri = "http://localhost:3000";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
      "playlist-read-private",
      "app-remote-control",
      "streaming",
      "playlist-modify-private",
      "user-library-modify",
      "user-library-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
 

 return(
  <>
  
  <Animation/>
 
  <Container>

  <img
        src={Musicaly}
        alt="spotify"
      />
          <button className="test button-new mb-10" onClick={handleClick}>Connect To Musicaly</button>

    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;
  gap: 5rem;
  img {
    height: 100%;
  }
  button {
    padding: 1rem 10rem;
    margin: 1rem 10rem;
    border-radius: 5rem;
    background-color: green;
    color: white;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .button-new { 
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }
  
  .button-new:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  
  .button-new:active {
    transform: translateY(-1px);
  }
  body{
    margin: 0;
    padding: 0;
    background-color: white;
    overflow-x:hidden;
    overflow-y:hidden;
  }

  .box {
    position: fixed;
    top: 10;
    bottom: 25;
    transform: rotate(235deg);
    left: 80;
    right:80;
  }
  
  .wave {
    position: fixed;
    top: 0;
    left: 0;
    opacity: .15;
    position: absolute;
    top: 3%;
    left: 100%;
    background: purple;
    width: 500px;
    height: 500px;
    margin-left: -200px;
    margin-top: -210px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: drift 7000ms infinite linear;
  }
  
  .wave.-three {
    animation: drift 7500ms infinite linear;
    position: fixed;
    opacity:0.1;
    background-color: purple;
  }
  
  .wave.-two {
    animation: drift 3000ms infinite linear;
    opacity: .1;
    background: yellow;
    position: fixed;
  }
  
  .box:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }
  
  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
  
  
  .contain {
    animation-delay: 4s;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  
    background: purple;
    background: -webkit-linear-gradient(yellow, purple);
    background: linear-gradient(yellow, purple);
  }
  
  .icon {
    width: 100px;
    height: 100px;
    margin: 0 5px;
  }
  
  /*Animation*/
  .icon:nth-child(2) img {-webkit-animation-delay: 0.2s;animation-delay: 0.2s}
  .icon:nth-child(3) img {-webkit-animation-delay: 0.3s;animation-delay: 0.3s}
  .icon:nth-child(4) img {-webkit-animation-delay: 0.4s;animation-delay: 0.4s}
  
  .icon img {
    -webkit-animation: anim 2s ease infinite;
    animation: anim 2s ease infinite;
    -webkit-transform: scale(0,0) rotateZ(180deg);
    transform: scale(0,0) rotateZ(180deg);
  }
  
  @-webkit-keyframes anim{
    0% {
      -webkit-transform: scale(0,0) rotateZ(-90deg);
      transform: scale(0,0) rotateZ(-90deg);opacity:0
    }
    30% {
      -webkit-transform: scale(1,1) rotateZ(0deg);
      transform: scale(1,1) rotateZ(0deg);opacity:1
    }
    50% {
      -webkit-transform: scale(1,1) rotateZ(0deg);
      transform: scale(1,1) rotateZ(0deg);opacity:1
    }
    80% {
      -webkit-transform: scale(0,0) rotateZ(90deg);
      transform: scale(0,0) rotateZ(90deg);opacity:0
    }
  }
  
  @keyframes anim{
    0% {
      -webkit-transform: scale(0,0) rotateZ(-90deg);
      transform: scale(0,0) rotateZ(-90deg);opacity:0
    }
    30% {
      -webkit-transform: scale(1,1) rotateZ(0deg);transform: scale(1,1) rotateZ(0deg);opacity:1
    }
    50% {
      -webkit-transform: scale(1,1) rotateZ(0deg);
      transform: scale(1,1) rotateZ(0deg);opacity:1
    }
    80% {
      -webkit-transform: scale(0,0) rotateZ(90deg);
      transform: scale(0,0) rotateZ(90deg);opacity:0
    }
  }
  .test { 
    index: 50;
    top: 650px;
    position: absolute;
  }

`;
