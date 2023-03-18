export interface IUserAuth {
  username: string;
  password: string;
}

export interface IAuthData {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}
