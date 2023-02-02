import React from "react"
import styled from "styled-components"
import { useStateProvider } from "../utils/StateProvider"
import axios from "axios";
import { reducerCases } from "../utils/Constants";



export default function TrackSearchResult({ track, chooseTrack }) {
  const [{token},dispatch] = useStateProvider();

 async function handlePlay() {

    const trackUri = track.uri;
 
    const trackName = track.title;
  
    
    const trackId = track.trackId;
    
    const trackImage = track.albumUrl;
    
    const trackDuration = track.duration;
   
    const trackArtist = track.artist;
    const context_uri = track.context_uri;
    
    const track_number = track.track_number;
 

    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: (track_number - 1),
        },
        position_ms: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      const currentPlaying = {
        trackId,
        trackName,
        trackArtist,
        trackImage,
        trackDuration,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    } else {
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: false});
    }
  };

  

  return (
    <>
    <Container>
    <div
      className="tracks row1"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} className="img1 col1" />
      <div className="info col1">
        <div>{track.title}</div>
        <div className="text-muted details">|{track.artist}|</div>
      </div>
    </div>
    </Container>
    </>
  )
}
const Container = styled.div`
  .col1 {
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items: center;
    color: white;
    img {
      height: 40px;
      width: 40px;
    }
}
  .row1{
    padding: auto;
    margin:auto;
        transition: all 0.2s ease;
        &:hover {
          transform: scale(1.04);
          background-color: rgba(0, 0, 0, 0.7);
          color:black;
        }
  }  
  .tracks {
    background-color: rgba(0, 0, 0, 0.7);
      margin: 0 2rem;
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content:center;
      margin-bottom: 1rem;
      

    }
    .img1{
      width:100px;
    }
    .info{
      margin:auto;
      color:white;
      overflow-y:hidden;
      font-weight:600;
      font-size:17px;
      text-transform: uppercase;
      &:hover {
	      background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	      -webkit-background-clip: text;
	      -webkit-text-fill-color: transparent;
      }
    }
    .details{
      margin:auto;
      text-transform:capitalize;
      font-size:15px;
    }
`;