import React from 'react'
import Layout from '../layouts/Layout'
import { useAuth } from '../context/auth'

const Home = () => {
  const [auth, setAuth] = useAuth({});
  return (
    <Layout>
      <main className='page'>
        <h1>Home Page</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </main>
    </Layout>
  )
}

export default Home