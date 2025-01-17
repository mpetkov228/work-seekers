import { useState } from "react";

function JobCreateForm() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form style={{ textAlign: 'center' }}>
      <h2>Post your job</h2>
      <div>
        Job title <input value={jobTitle} onChange={({ target }) => setJobTitle(target.value)} />
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