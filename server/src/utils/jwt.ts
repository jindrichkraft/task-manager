import jsonwebtoken from 'jsonwebtoken';

import { AUTH_TOKEN_EXPIRATION_IN_HOURS } from './constants';

export const generateJwt = (userId: number) => {
  const payload = {
    user: {
      id: userId,
    },
  };

  return jsonwebtoken.sign(payload, process.env.JWT_SECRET || '', {
    expiresIn: `${AUTH_TOKEN_EXPIRATION_IN_HOURS}h`,
  });
};
