import { useEffect, useState } from "react";

import jobService from "./services/jobs";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const data = await jobService.getAll();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <>
      <h1>Work Seekers</h1>
      <div>{jobs.map(job => 
        <JobCard key={job.id} job={job} />
      )}</div>
    </>
  );
}

export default App;
