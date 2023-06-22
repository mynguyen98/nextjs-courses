import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Trial = ({ data }) => {
  const [clientData, setClientData] = useState()
  useEffect(() => {
    const getDataClient = async () => {
      const resp = await axios('https://fakestoreapi.com/products/1')
      setClientData(resp.data)
    }
    getDataClient()
  }, [])
  console.log(clientData)
  return (
    <>
      <div>
        {data.map((item) => {
          return <h2>{item}</h2>
        })}
      </div>
      <div>
        <h1>{clientData?.title}</h1>
        <h2>{clientData?.description}</h2>
        <img src={clientData?.image} width='300px' alt='' />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const resp = await axios('https://fakestoreapi.com/products/categories')
  console.log(resp)
  const data = resp.data
  return {
    props: {
      data: data,
    },
    revalidate: 10,
  }
}

export default Trial
