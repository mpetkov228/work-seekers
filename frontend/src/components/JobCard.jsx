function JobCard ({ job }) {
  const jobStyle = {
    border: '1px solid black',
    marginTop: 2,
    padding: 4
  };

  return (
    <div style={jobStyle}>
      <h3>{job.title}</h3>
      <div>{job.company} | {job.location} | {job.salary}</div>
    </div>
  );
}

export default JobCard;