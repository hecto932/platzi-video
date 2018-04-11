import React from 'react'
import './volume.css'
import VolumeIcon from '../../icons/components/volume'

function Volume (props) {
  return (
    <button 
      className="Volume"
      onClick={props.handleVolumeClick}
    >
      <VolumeIcon 
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume