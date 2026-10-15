import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h1>WorkLink</h1>
      <p>Find people to get jobs done, or find jobs to do.</p>
      {user ? (
        <Link to="/dashboard">Go to your dashboard</Link>
      ) : (
        <p><Link to="/register">Create an account</Link> or <Link to="/login">log in</Link>.</p>
      )}
    </div>
  );
}
