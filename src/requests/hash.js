import axios from 'axios';

export const hash = async (awareness) => {
  return axios.post(`${process.env.REACT_APP_SERVER}/hash`, awareness)
    .then(res => res.data)
}