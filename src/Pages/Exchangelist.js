import React, { useEffect, useState } from 'react'

import './Exchangelist.css'


function Exchange(props) {
  const [data, setData] = useState()


  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchanges', {

    })
      .then((res) => res.json())
      .then((exchange) => {
        setData(exchange)
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
              <div className = "container-gambar" key={item.id}>
                <img className = "exchange-img"
                  src={item.image === undefined || null ? 'https://asset.kompas.com/crops/DN9E0eZyfpbXdkcjNDc4EhXytvc=/65x0:1043x652/750x500/data/photo/2019/12/04/5de7377fa911a.jpg' : item.image}
                  alt="img not found"
                />
                <p className = "exchange-name">{item.name}</p>       
              </div>
            )
            
          })}
    </div>
  )
}

export default Exchange;