import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import WorkerDashboard from './pages/dashboard/WorkerDashboard';
import RequesterDashboard from './pages/dashboard/RequesterDashboard';

// /dashboard shows the right dashboard for the logged-in user's role
function Dashboard() {
  const { user } = useAuth();
  if (user.role === 'REQUESTER') return <RequesterDashboard />;
  if (user.role === 'WORKER') return <WorkerDashboard />;
  return <p className="center">Admin dashboard coming later.</p>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}
