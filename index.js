const axios = require('axios');

async function run(jenkinsUrl) {
  try {
    // Make a request to trigger a Jenkins job
    const response = await axios.post(`${jenkinsUrl}/job/my-projects/job/deploy-job/build`, null, {
      auth: {
        username: 'Hamid',
        password: 'hamid50028'
      }
    });
    
    console.log('Job triggered successfully:', response.data);
  } catch (error) {
    console.error('Error triggering Jenkins job:', error);
  }
}

module.exports = run;
