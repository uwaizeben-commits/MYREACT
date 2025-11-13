import React from 'react'
import './Anime.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Anime = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getAnime()
  }, [])

  const getAnime = async () => {
    await axios.get('https://dattebayo-api.onrender.com/characters').then(res => {
      const character = res.data.characters
      console.log(character)

      const info = character.map((val, index) => {
        return (
          <div className= 'card' style={{ width: '18rem' }} key={index}>
            <img src={val.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{val.name}</h5>
              <p className='card-text'>{val.personal.sex}</p>
              <p className="card-text">{val.personal.birthdate}</p>
            </div>
          </div>
        )
      })
    setData(info)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="anime-container">
      <h1>Naruto Characters</h1>
      <div className="grid">{data}</div>
    </div>
  )
}

export default Anime