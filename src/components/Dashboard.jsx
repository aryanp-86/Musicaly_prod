import { useState, useEffect } from "react"
import TrackSearchResult from "./TrackSearchResults"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import { useStateProvider } from "../utils/StateProvider"
import "./SearchBar.css"
import { Link } from "react-router-dom";


const spotifyApi = new SpotifyWebApi({
  clientId:
  //Client ID comes here,
})

export default function Dashboard() {
    const [{token}] = useStateProvider();
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
  }



  useEffect(() => {
    if (!token) return
    spotifyApi.setAccessToken(token)
  }, [token])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!token) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )
          
          return {
            id:track.id,
            title: track.name,
            artist: track.artists[0].name,
            uri: track.uri,
            albumUrl: track.album.images[1].url,
            duration:track.duration_ms,
            context_uri:track.album.uri,
            track_number:track.track_number,
            trackId:track.id,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, token])

  return (
 
    <Container  style={{ height: "100%"}}>
      <Form.Control
        type="search"
       className="searchBar"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
        to="/search"
      />
      <div style={{ overflowY: "auto"}} className="wholeDiv">
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
    </Container>
  
    
  )
}
