const express = require('express'); // Importing the Express library to create the server
const path = require('path'); // Importing the Path library to handle file paths
const { getCityInfo, getJobs } = require('./util'); // Importing helper functions from util.js

const app = express(); // Creating an Express application

//  serve static files  from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle API requests for city and job information
app.get('/api/city/:city', async (req, res) => {
  const city = req.params.city; // Extracts the city name from the URL

  try {
    // Call helper functions to get city information and job listings based on the city
    const cityInfo = await getCityInfo(city);
    const jobs = await getJobs(city);

    // If no data is found for both cityInfo and jobs, send a 404 status
    if (!cityInfo && !jobs) {
      return res.status(404).json({ error: 'No Jobs or City Found' });
    }

    // If data is found, send it as a JSON response with a 200 status
    res.status(200).json({ cityInfo, jobs });
  } catch (error) {
    //  handle  error codes
    if (error.response && [401, 403, 404, 500].includes(error.response.status)) {
      return res.status(404).json({ error: `Not Found: ${error.response.status}` });
    }

    // generic error
    res.status(500).json({ error: 'Generic Server Error' });
  }
});

module.exports = app;


