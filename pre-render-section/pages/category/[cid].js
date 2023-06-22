import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const CategoryDetail = ({ category }) => {
  console.log(category)
  if (!category) return
  return (
    <div>
      {category.map((item) => {
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
export async function getStaticProps(context) {
  const { params } = context
  console.log(params)
  const resp = await axios.get(
    `https://fakestoreapi.com/products/category/${params.cid}`
  )
  console.log(resp)
  return {
    props: { category: resp.data },
  }
}
export async function getStaticPaths(context) {
  const resp = await axios('https://fakestoreapi.com/products/categories')
  const paths = resp.data.map((category) => {
    return { params: { cid: category } }
  })
  return {
    paths: paths,
    fallback: true,
  }
}
export default CategoryDetail
