import { Router } from 'express';
import bcrypt from 'bcrypt';

import { pool } from '../main';
import {
  PASSWORD_SALT_ROUNDS,
  BAD_REQUEST_CODE,
  UNAUTHORIZED_CODE,
  SERVER_ERROR_CODE,
} from '../utils/constants';

const authRouter = Router();

authRouter.post('/register', async (req, res) => {
  try {
    const { username, displayName, password } = req.body;
    if (!username || !displayName || !password)
      return res.status(BAD_REQUEST_CODE).json({
        success: false,
        message: 'Invalid input data!',
        data: null,
      });

    const existingUser = await pool.query(
      'SELECT * FROM Users WHERE LOWER(username) = LOWER($1)',
      [username.toLowerCase()]
    );
    if (existingUser.rowCount !== 0)
      return res.status(UNAUTHORIZED_CODE).json({
        success: false,
        message: 'User with this username already exists!',
        data: null,
      });

    const salt = await bcrypt.genSalt(PASSWORD_SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = (
      await pool.query(
        'INSERT INTO Users (username, display_name, password) VALUES ($1, $2, $3) RETURNING *',
        [username, displayName, hashedPassword]
      )
    ).rows[0];

    return res.json({
      success: true,
      message: 'Successfully created user!',
      data: {
        id: newUser.user_id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(SERVER_ERROR_CODE).json({
      success: false,
      message: 'Server error!',
      data: null,
    });
  }
});

export default authRouter;
