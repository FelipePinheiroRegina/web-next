import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
  const { user } = useUser()
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user)}</pre>
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()
