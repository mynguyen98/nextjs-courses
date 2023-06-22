import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link'
function HomePage(props) {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        )
      })}
      <Link href='/profile'>to Profile</Link>
    </ul>
  )
}

export async function getStaticProps(context) {
  console.log(context)
  console.log('re-generating')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  }
}
export default HomePage
