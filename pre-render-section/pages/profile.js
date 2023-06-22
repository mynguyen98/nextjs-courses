import React from 'react'

const Profile = (props) => {
  return <div>{props.username}</div>
}

export default Profile

export async function getServerSideProps(context) {
  const { params, req, res } = context
  console.log(req, res)
  console.log('server side rendering')
  return {
    props: {
      username: 'Max',
    },
  }
}
