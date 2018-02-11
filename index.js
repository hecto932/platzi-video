import React from 'react'
import { render } from 'react-dom'

// Components
import Media from './src/playlist/components/media'

const app = document.getElementById('app')

render(<Media title="¿Por que aprender ReactJS?" author="hecto932" image="./images/covers/responsive.jpg"/>, app)