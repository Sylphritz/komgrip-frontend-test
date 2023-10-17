import axios from 'axios'

const client = axios.create({
  // Normally, I would put the hostname in an environment variable,
  // but for simplicity's sake, I'll just hardcode it here. -- Dear
  baseURL: 'https://komgrip.co.th/coincap',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default client
