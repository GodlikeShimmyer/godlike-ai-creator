import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { projectName, designType, prompt, userId } = req.body;
    if (!projectName || !designType || !prompt || !userId) return res.status(400).json({ error: 'Missing required fields' });

    return res.status(200).json({ success: true, jobId: Math.random().toString(36).substr(2, 9), status: 'processing', message: 'Design generation started' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
