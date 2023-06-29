const express = require('express');
const axios = require('axios');
require('dotenv').config();
var cors = require('cors')

console.log(process.env.api)
const app = express();
const port = 8080;
app.use(cors({
  origin:"*"
}))

app.use(express.json());

app.get('/shayari', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Shayari about ${keyword}`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
     
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.api}`,
        'Content-Type': 'application/json'
      }
    });

    const shayari = response.data.choices[0].text.trim();
    res.json({ shayari });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/joke', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `joke about ${keyword}`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
     
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.api}`,
        'Content-Type': 'application/json'
      }
    });

    const joke = response.data.choices[0].text.trim();
    res.json({ joke });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
app.get('/story', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Story about ${keyword}`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
     
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.api}`,
        'Content-Type': 'application/json'
      }
    });

    const story = response.data.choices[0].text.trim();
    res.json({ story });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
app.get('/quote', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `quote about ${keyword}`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
     
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.api}`,
        'Content-Type': 'application/json'
      }
    });

    const quote = response.data.choices[0].text.trim();
    res.json({ quote });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
