import axios from 'axios';

export const apiVote = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2',
});

export default {apiVote};
