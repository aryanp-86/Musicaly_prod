import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import { useStateProvider } from "../utils/StateProvider";


export default function Player({ trackUri }) {
  const [play, setPlay] = useState(false)
  const [{ token }] = useStateProvider();
  useEffect(() => setPlay(true), [trackUri])

  
  return (
    <SpotifyPlayer
    token={token}
    autoPlay={true}
    showSaveIcon
    callback={state => {
      if (!state.isPlaying) setPlay(false)
    }}
    play={play}
    magnifySliderOnHover={true}
    uris={trackUri}
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
  )
}