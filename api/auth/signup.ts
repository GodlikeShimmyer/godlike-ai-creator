// Vercel Serverless Function - User Signup
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // TODO: Implement actual database logic
    // 1. Hash password using bcrypt
    // 2. Store user in database
    // 3. Generate JWT token
    // 4. Return user data and token

    // Mock response
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
    };

    return res.status(201).json({
      success: true,
      user,
      token: 'mock-jwt-token',
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
