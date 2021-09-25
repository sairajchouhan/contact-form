import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
  success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { name, email, message }: { name: string; email: string; message: string } = req.body
    const msg = {
      to: 'sairaj2119@gmail.com',
      from: 'sairaj2119@gmail.com',
      subject: `${name.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: `<strong>${message}</strong>`,
    }
    try {
      await sgMail.send(msg)
      res.status(200).json({ success: true })
    } catch (err) {
      res.status(500).json({ success: false })
    }
  }
}
