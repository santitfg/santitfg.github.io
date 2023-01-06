import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'

const NotFoundPage = () => {
  return (
    <main className='bg-[#1da1f2] text-white'>
      <h1 >Page not found</h1>
      <p >
        Sorry 😔, we couldn’t find what you were looking for.

        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
