import axios, {AxiosResponse } from "axios";

export const getMovies = async() => {
 const response: AxiosResponse<[]> = await axios.get(``)
 const data = await response.data;
 return data
}