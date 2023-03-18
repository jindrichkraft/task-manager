import { Router } from 'express';

import { pool } from '../main';
import { authorize } from '../middlewares/auth';
import { PROFILE_BY_USER_ID_QUERY } from '../queries/profile';
import { SERVER_ERROR_CODE } from '../utils/constants';

const profileRouter = Router();

profileRouter.get('/', authorize, async (req, res) => {
  try {
    const profile = await pool.query(PROFILE_BY_USER_ID_QUERY, [req.user.id]);
    return res.json({
      success: true,
      message: '',
      data: profile.rows[0],
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

export default profileRouter;
