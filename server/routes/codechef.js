// const express = require('express');
// const fetch = require('node-fetch');

// const app = express();
// const PORT = 3000;

// // Define your API route
// app.get('/api/codechef/:username', async (req, res) => {
//   const { username } = req.params;
//   const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// import express from 'express';
// import fetch from 'node-fetch';

// const router = express.Router();

// router.get('/:username', async (req, res) => {
//   const { username } = req.params;

//   const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;
// const headers = { 'Cache-Control': 'no-cache' }; // Add this line to set cache-control headers

// try {
//   const response = await fetch(apiUrl, { headers }); // Pass the headers object in the fetch options
//   const data = await response.json();
//   res.json(data);
//   console.log(data);
// } catch (error) {
//   console.error(error);
//   res.status(500).json({ error: 'Internal server error' });
// }
//   // const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;

//   // try {
//   //   const response = await fetch(apiUrl);
//   //   const data = await response.json();
//   //   res.json(data);
//   //   console.log(daat);
//   // } catch (error) {
//   //   console.error(error);
//   //   res.status(500).json({ error: 'Internal server error' });
//   // }
// });

// export default router;
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get(`/api/codechef/:username`, async (req, res) => {
  const { username } = req.params;
  const apiUrl = `https://coding-platform-profile-api.onrender.com/codechef/${username}`;
  const headers = { 'Cache-Control': 'no-cache' }; // Add this line to set cache-control headers
  console.log("useffect cc");
  try {
    const response = await fetch(apiUrl, { headers }); // Pass the headers object in the fetch options
    const data = await response.json();
    console.log("useffect 2");
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
