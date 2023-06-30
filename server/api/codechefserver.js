import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3002;

app.get('/api/codechef/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    console.log("start");
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
