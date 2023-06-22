import React from 'react'
import path from 'path'
import fs from 'fs/promises'
const ProductDetail = ({ products }) => {
  if (!products) return <p>...loading</p>
  return <div>{products.description}</div>
}
export async function getStaticProps(context) {
  console.log('re-generating get product details...')
  const { params } = context
  const productId = params.pid
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  const product = data.products.find((product) => product.id === productId)
  if (!product) {
    return { notFound: true }
  }
  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
  }
  return {
    props: {
      products: product,
    },
  }
}
export async function getStaticPaths(context) {
  return {
    paths: [{ params: { pid: 'p1' } }, { params: { pid: 'p3' } }],
    fallback: true,
  }
}
export default ProductDetail
