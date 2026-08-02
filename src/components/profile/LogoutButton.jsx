import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="
      w-full
      bg-destructive/10
      text-destructive
      rounded-xl
      py-4
      flex
      items-center
      justify-center
      gap-2
      hover:bg-destructive/20
      transition
      "
    >
      <LogOut className="w-5 h-5" />
      <span>Sign Out</span>
    </button>
  );
}

export default LogoutButton;