import { useParams } from "react-router";

function JobPage({ jobs }) {
  const id = useParams().id;
  const job = jobs.find(j => j.id === id);

  return (
    <div>
      <h2>{job.title}</h2>
      <div>{job.description}</div>
    </div>
  );
}

export default JobPage;