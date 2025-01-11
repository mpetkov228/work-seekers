import { useEffect, useState } from "react";

import jobService from "./services/jobs";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const data = await jobService.getAll();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  const jobStyle = {
    border: '1px solid black',
    marginTop: 2,
    padding: 4
  };

  return (
    <>
      <h1>Work Seekers</h1>
      <div>{jobs.map(job => 
        <div key={job.id} style={jobStyle}>{job.title}</div>
      )}</div>
    </>
  );
}

export default App;
