import axios from 'axios';

export const addUser = async (user) => {
  return axios.post(`${process.env.REACT_APP_SERVER}/users/add-user`, user)
    .then(res => console.log(res))
}