import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const resp = await axios('https://fakestoreapi.com/products')
      setData(resp.data)
      setIsLoading(false)
    }
    getData()
  }, [])
  console.log(data)
  if (isLoading) return <h1>Loading...</h1>
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={`/stores/${item.id}`}>product{item.id}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Products
