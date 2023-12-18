import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => {
  try {
    const result = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });

    console.log(result);
    return result;
  } catch (error) {
    // Log the error for debugging
    console.error("Login failed:", error);

    // Rethrow the error or handle it accordingly
    throw error;
  }

}

export const register = (email, password) => 
  request.post(`${baseUrl}/register`, {
    email,
    password,
  })

export const logout = () => request.get(`${baseUrl}/logout`)



