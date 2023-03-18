import type { Request } from 'express';

export interface IGetUserAuthInfoRequest extends Request {
  user: {
    id: number;
  };
}
