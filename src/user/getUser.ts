import { Router } from 'express';
import supabase from '../supabaseClient';

const router: Router = Router();

router.post('/:token', async (req: any, res: any) => {
  const { token } = req.params;
  console.log('token', token);
  if (!token) {
    return res.status(400).json({
      message: 'Token is required',
      data: null,
      status: 400,
    });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, email,first_name,last_name,username,image,created_at')
      .eq('token', token)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: 'User not found',
        data: null,
        status: 404,
      });
    }

    return res.json({
      message: 'User information retrieved successfully',
      data: {
        ...data,
        isValid: true,
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({
      message: 'Internal server error',
      data: null,
      status: 500,
    });
  }
});

export default router;
