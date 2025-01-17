import { useEffect, useState } from "react";

import jobService from "./services/jobs";
import JobCard from "./components/JobCard";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";

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
      <Nav />
      {/* <div>{jobs.map(job => 
        <JobCard key={job.id} job={job} />
      )}</div> */}

      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/jobs" element={<div>jobs</div>} />
        <Route path="/testimonials" element={<div>testimonials</div>} />
        <Route path="/contact" element={<div>contact us</div>} />
      </Routes>
    </>
  );
}

export default App;
