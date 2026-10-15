import { useAuth } from '../../context/AuthContext';

export default function WorkerDashboard() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h2>Worker dashboard</h2>
      <p>Welcome, {user.name}! You are logged in as a <strong>Worker</strong>.</p>
      <p>Your applications will appear here later.</p>
    </div>
  );
}
