import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Topcoin.css'


function TopCoin(props) {
  const [data, setData] = useState()
  const {history} = props

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins', {

    })
      .then((res) => res.json())
      .then((token) => {
        setData(token)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(data)

  return (
    <div className = "list">
      {data === undefined
        ? 'Loading....'
        : data.map((item) => {
            return (

              <div key={item.id}>
                <NavLink to = {`/Topcoin/${item.id}`} onClick ={()=>history.push(`/Topcoin/${item.id}`)}>
                <img className = "token-img"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image.large}
                  alt="img not found"
                />
                <p className = "token-name">{item.name}</p>
                </NavLink>
              </div>

            )
            
          })}
    </div>
  )
}

export default TopCoin;