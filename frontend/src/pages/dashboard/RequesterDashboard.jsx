import { useAuth } from '../../context/AuthContext';

export default function RequesterDashboard() {
  const { user } = useAuth();
  return (
    <div className="card">
      <h2>Requester dashboard</h2>
      <p>Welcome, {user.name}! You are logged in as a <strong>Requester</strong>.</p>
      <p>Your posted jobs will appear here later.</p>
    </div>
  );
}
