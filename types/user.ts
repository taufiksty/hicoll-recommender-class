export interface User {
  id: number;
  fullname: string;
  email: string;
  phone_number?: string;
  gender?: string;
  birthdate?: string;
  description?: string;
  linkedin_url?: string;
  image?: string;
  interests?: string;
  is_active: boolean;
  is_first_login: boolean;
  password?: string;
  token?: string;
  user_type_id: number;
  created_at: string;
  updated_at: string;
}
