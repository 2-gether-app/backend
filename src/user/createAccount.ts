import { Router } from 'express';
import supabase from '../supabaseClient';
import crypto from 'crypto';

const router: Router = Router();

function generateAuthToken(email: string, username: string) {
  const token = crypto.randomBytes(12).toString('hex');

  return token;
}

router.post('/', async (req: any, res: any) => {
  const { email, password, first_name, last_name, phone, username, image } =
    req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const generatedToken = generateAuthToken(email, username);
  const { error } = await supabase
    .from('users')
    .insert([
      {
        email,
        password,
        first_name,
        last_name,
        phone,
        username,
        image,
        token: generatedToken,
      },
    ])
    .select();

  if (error) {
    return res
      .status(400)
      .json({ message: error.message, data: null, status: 500 });
  }

  return res.send({
    message: 'Account created successfully',
    data: generatedToken,
    status: 200,
  });
});

export default router;
