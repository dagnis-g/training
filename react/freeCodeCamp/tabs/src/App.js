import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[index];

  const changeIndex = index => {
    setIndex(index);
  };
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button
                className={i === index ? 'job-btn active-btn' : 'job-btn'}
                onClick={() => {
                  changeIndex(i);
                }}
                key={job.id}
              >
                {job.company}
              </button>
            );
          })}
        </div>{' '}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((duty, i) => {
            return (
              <div className="job-desc" key={i}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
