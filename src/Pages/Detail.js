import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Detail.css'

export default function Detail(){
  const [data, setData] = useState()
  const {itemId} = useParams()

  useEffect(() => {

    fetch (
    `https://api.coingecko.com/api/v3/coins/${itemId}`
    )
    .then((res) => res.json())
    .then((token) => {
      setData(token)
      })


    .catch((error) => {
      console.log(error)
    })
  }, [itemId])
  console.log(data)


  return (

    <div>

      <div>
      <p>Nama : {data === undefined ? "Loading..." : data.name} </p>
      <p>Rank : {data === undefined ? "Loading..." : data.coingecko_rank}</p>
      <p>Simbol : {data === undefined ? "Loading..." : data.symbol}</p>
      <p>Subsciber Reddit : {data === undefined ? "Loading..." : data.community_data.reddit_subscribers}</p>
      </div>

      </div> 

    )
}