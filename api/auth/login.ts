// Vercel Serverless Function - User Login
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // TODO: Implement actual database logic
    // 1. Find user by email
    // 2. Verify password using bcrypt
    // 3. Generate JWT token
    // 4. Return user data and token

    // Mock response
    const user = {
      id: 'mock-user-id',
      email,
      name: 'Mock User',
      createdAt: new Date().toISOString(),
    };

    return res.status(200).json({
      success: true,
      user,
      token: 'mock-jwt-token',
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
