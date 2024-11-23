import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4609ba8b09604a08ab304773784fc798'
  }
})