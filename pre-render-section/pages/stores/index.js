import axios from 'axios'
import React from 'react'
import Products from '../../components/products'
import Link from 'next/link'
const SalesProduct = ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.map((item) => (
        <div>
          <Link href={`category/${item}`}>{item}</Link>
        </div>
      ))}
      <Products />
    </div>
  )
}

export async function getStaticProps() {
  const resp = await axios('https://fakestoreapi.com/products/categories')
  const data = resp.data
  return {
    props: {
      data: data,
    },
    revalidate: 10,
  }
}

export default SalesProduct
