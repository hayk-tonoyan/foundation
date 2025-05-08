import AdminPanel from '@/appPages/Admin/AdminPanel';
import LoginFlow from '@/appPages/Admin/LoginFlow';

export default function AdminPage() {
  return (
    <LoginFlow>
      <AdminPanel />
    </LoginFlow>
  );
}
