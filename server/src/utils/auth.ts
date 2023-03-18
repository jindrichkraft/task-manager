import { generateJwt } from './jwt';

import { AUTH_TOKEN_TYPE, AUTH_TOKEN_EXPIRATION_IN_HOURS } from './constants';

export const generateTokenData = (userId: number) => ({
  accessToken: generateJwt(userId),
  tokenType: AUTH_TOKEN_TYPE,
  expiresIn: AUTH_TOKEN_EXPIRATION_IN_HOURS * 3600 - 1,
});
