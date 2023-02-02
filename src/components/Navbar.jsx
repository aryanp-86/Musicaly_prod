import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";






export default function Navbar({ navBackground }) {
  const [{ userInfo,}] = useStateProvider();

  return (
    <>
   
    <Container navBackground={navBackground}>
     
     
      <div className="avatar">
        
        <a href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div>
     
    </Container>
    </>
  );
}

const Container = styled.div`
  .new{
    background-color: #484877;
opacity: 1;
background-image: radial-gradient(circle at center center, #390c67, #484877), repeating-radial-gradient(circle at center center, #390c67, #390c67, 13px, transparent 26px, transparent 13px);
background-blend-mode: multiply;
  }
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: flex-end;
    margin-left:20px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
`;