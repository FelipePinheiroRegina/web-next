import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    const body = {
      client_id: process.env.AUTH0_CLIENT_ID_API,
      client_secret: process.env.AUTH0_CLIENT_SECRET_API,
      audience: process.env.AUTH0_AUDIENCE_API,
      grant_type: 'client_credentials',
    }

    const response = await axios.post(
      `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
      body,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )

    res.json(response.data)
    return
  } catch {
    return res.status(500).json({ error: 'error fetch token' })
  }
}
