import { Router } from 'express';
import supabase from '../supabaseClient';

const router: Router = Router();

router.post('/', async (req: any, res: any) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('token')
      .eq('email', email)
      .eq('password', password)
      .single();

    if (error || !data) {
      return res.status(401).json({
        message: 'Invalid email or password',
        data: null,
        status: 401,
      });
    }

    return res.json({
      message: 'Login successful',
      data: data.token,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      data: null,
      status: 500,
    });
  }
});

export default router;
