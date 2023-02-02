import React, { useEffect,useState } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import SpotifyPlayer from "react-spotify-web-playback"
import "./Css/CurrentPlayer.css"



export default function CurrentTrack() {
  const [play, setPlay] = useState(false)
  const [{ token, currentPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
     
      if (response.data !== "") {
        var currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
          duration:response.data.item.duration_ms,
          trackUri:response.data.item.uri
        };
        
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };

    getCurrentTrack();
    
  }, [token, dispatch]);

  
 
  return ( 
    <>
   

       <div className="new-one">
      {currentPlaying && (
      <SpotifyPlayer
      token={token}
      autoPlay={true}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      magnifySliderOnHover={true}
      uris={currentPlaying.trackUri}
      styles={{
        activeColor: '#fff',
        bgColor: '#01191f',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    />
    )}
   </div>
 
    </>
    
  );
}


