import { useState } from "react";

import jobService from "../services/jobs";

function JobCreateForm({ appendJob }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  function clearForm() {
    setTitle('');
    setLocation('');
    setCompany('');
    setSalary('');
    setDescription('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newJob = {
      title,
      location,
      company,
      salary,
      description
    };

    const createdJob = await jobService.createJob(newJob);
    appendJob(createdJob);
    clearForm();
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <h2>Post your job</h2>
      <div>
        Job title <input value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>
      <div>
        Company name <input value={company} onChange={({ target }) => setCompany(target.value)} />
      </div>
      <div>
        Location <input value={location} onChange={({ target }) => setLocation(target.value)} />
      </div>
      <div>
        Salary <input value={salary} onChange={({ target }) => setSalary(target.value)} />
      </div>
      <div>
        Description <textarea value={description} onChange={({ target }) => setDescription(target.value)}></textarea>
      </div>
      <button type="submit">Post</button>
    </form>
  );
}

export default JobCreateForm;