export type APIEndpoint = '/profile';

export interface IAPIResponse {
  success: boolean;
  message: string | null;
  data: unknown | null;
}
