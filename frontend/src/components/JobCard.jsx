function JobCard ({ job }) {
  return (
    <div>
      <h3>{job.title}</h3>
      <div>{job.location} {job.salary}</div>
    </div>
  );
}

export default JobCard;