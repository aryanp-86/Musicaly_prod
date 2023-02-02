import React from "react";
import styled from "styled-components";
import Musicaly from "../Extras/Musicaly.png"
import Playlists from "./Playlists";


export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
        <img 
       src={Musicaly}
       alt="Musicaly Logo"
       />
        </div>
       
      </div>
      
      <Playlists />

    </Container>
  );
}

const Container = styled.div`
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: #b3b3b3;
  display: flex;
  ul::-webkit-scrollbar {
    display: none;
  }
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      display:flex;
      align-items:center;
      justify-center:center;
      transform: scale(1.25);
      img {
        height:100%;

      }
      &:hover{
        transition: 0.3s ease-in-out;
        transform:scale(1.3);
        img:hover {
          
          /* Start the shake animation and make the animation last for 0.5 seconds */
          animation: shake 0.5s;
        
          /* When the animation is finished, start again */
          animation-iteration-count: infinite;
        }
        
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      }
      
    }
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;