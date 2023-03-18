import jsonwebtoken from 'jsonwebtoken';

import { UNAUTHORIZED_CODE, FORBIDDEN_CODE } from '../utils/constants';

import type { Response, NextFunction } from 'express';

import type { IGetUserAuthInfoRequest } from '../typings/auth';

export const authorize = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    return res.status(FORBIDDEN_CODE).json({
      success: false,
      message: 'Authorization denied!',
      data: null,
    });

  try {
    const validToken = jsonwebtoken.verify(
      token,
      process.env.JWT_SECRET || ''
    ) as IGetUserAuthInfoRequest;
    req.user = validToken.user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(UNAUTHORIZED_CODE).json({
      success: false,
      message: 'Invalid token!',
      data: null,
    });
  }
};
