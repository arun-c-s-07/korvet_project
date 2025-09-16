import React, { useState } from 'react';
import './ApplyForm.css';

function ApplyForm({ role }) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    github_portfolio: '',
    linkedin_profile: '',
    why_fit: '',
    resume: null
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('full_name', formData.full_name);
    data.append('email', formData.email);
    data.append('github_portfolio', formData.github_portfolio);
    data.append('linkedin_profile', formData.linkedin_profile);
    data.append('why_fit', formData.why_fit);
    data.append('resume', formData.resume);
    data.append('role', role);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/apply/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Server error: ${response.status}');
      }

      setStatus('success');
      setFormData({
        full_name: '',
        email: '',
        github_portfolio: '',
        linkedin_profile: '',
        why_fit: '',
        resume: null,
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <h3>Apply for: {role}</h3>

      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        required
        value={formData.full_name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="url"
        name="github_portfolio"
        placeholder="GitHub or Portfolio Link"
        value={formData.github_portfolio}
        onChange={handleChange}
      />

      <input
        type="url"
        name="linkedin_profile"
        placeholder="LinkedIn Profile"
        value={formData.linkedin_profile}
        onChange={handleChange}
      />

      <textarea
        name="why_fit"
        placeholder="Tell us why you're a good fit..."
        rows="4"
        value={formData.why_fit}
        onChange={handleChange}
      />

      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
      />

      <button type="submit" className="cta-button">Submit Application</button>

      {status === 'success' && <p className="success">✅ Application submitted successfully!</p>}
      {status === 'error' && <p className="error">❌ Something went wrong. Please try again.</p>}
    </form>
  );
}

export default ApplyForm;