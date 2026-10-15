import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'WORKER' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await register(form.name, form.email, form.password, form.role);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Could not register. Is the server running?');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card">
      <h2>Create your account</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Password (min 8 characters)</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} minLength={8} required />

        <label>I want to...</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="WORKER">Find work (Worker)</option>
          <option value="REQUESTER">Hire people (Requester)</option>
        </select>

        <button type="submit" disabled={submitting}>{submitting ? 'Creating account...' : 'Register'}</button>
      </form>
      <p>Already registered? <Link to="/login">Log in</Link></p>
    </div>
  );
}
