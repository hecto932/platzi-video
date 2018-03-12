import React from 'react'
import Media from './media.js'
import './playlist.css'
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/full-screen'
import Pause from '../../icons/components/pause'

function Playlist (props) {
  const categories = props.data.categories
  console.log(props.data)
  return (
    <div className="Playlist">
      <Play 
        size={32}
        color="red"
      />
      <Volume 
        size={32}
        color="blue"
      />
      <FullScreen
        size={32}
        color="green"
      />
      <Pause
        size={32}
        color="green"
      />
      {
        categories.map( c => {
          return (
            <div className="playlist-category">
              <p className="playlist-title"><strong>{c.title}</strong></p>
              <div className="playlist-videos">
                {
                  c.playlist.map(v => {
                    return <Media {...v} key={v.id}/>
                  })
                }
              </div>
            </div> 
          )
        })
      }
    </div>
  )
}

export default Playlist
