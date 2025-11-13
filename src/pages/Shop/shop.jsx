import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Shop = () => {
  const [data, setData] = useState('')

  useEffect(() =>{
    getCountry();
  }, [])

  const getCountry = async () => {
      await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images').then(res => {
      const countries = res.data.data
      console.log(countries)

      const info = countries.map((val, index) => (
        <tr>
          <td>{index+1}</td>
          <td>{val.name}</td>
          <td>{val.iso2}</td>
          <td>{val.iso3}</td>
          <td><img src={val.flag} alt={val.name} height={50} width={80} /></td>
        </tr>
      ))

      setData(info)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <table className='table'>
        <tr>
          <th>S/N</th>
          <th>NAME</th>
          <th>ISO2</th>
          <th>IS03</th>
          <th>FLAG</th>
        </tr>
        {data}
      </table>
      <button onClick={getCountry}>check</button>
    </div>
  )
}

export default Shop