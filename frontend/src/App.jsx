import { useEffect, useState } from "react";

import jobService from "./services/jobs";
import JobCard from "./components/JobCard";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import JobList from "./components/JobList";
import JobCreateForm from "./components/JobCreateForm";

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

      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/jobs" element={<JobList jobs={jobs} />} />
        <Route path="/testimonials" element={<div>testimonials</div>} />
        <Route path="/contact" element={<div>contact us</div>} />
        <Route path="/create" element={<JobCreateForm />} />
      </Routes>
    </>
  );
}

export default App;
