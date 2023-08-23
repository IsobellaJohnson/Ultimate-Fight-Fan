const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://api.sportradar.com/mma/trial/v2/en/rankings.json?api_key=4zdzcv9hr8cw67jhuhqu3gdh');
    const data = response.data;
    res.json(data);
    console.log(data)
    console.log('test')
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
