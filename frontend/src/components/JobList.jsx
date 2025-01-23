import { Link } from "react-router";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map(job => 
        <Link key={job.id} to={`/jobs/${job.id}`}><JobCard job={job} /></Link>
      )}
    </div>
  );
}

export default JobList;