import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Home,
  PenSquare,
  BarChart3,
  Lightbulb,
  BookOpen,
  User,
  Menu,
  X,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: Home,
    },
    {
      path: "/activityNote",
      label: "Catat Aktivitas",
      icon: PenSquare,
    },
    {
      path: "/analysis",
      label: "Analisis",
      icon: BarChart3,
    },
    {
      path: "/insight",
      label: "Insight AI",
      icon: Lightbulb,
    },
    {
      path: "/education",
      label: "Edukasi",
      icon: BookOpen,
    },
    {
      path: "/profile",
      label: "Profil",
      icon: User,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ================= MOBILE MENU ================= */}

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white border border-border rounded-xl shadow-lg p-2"
      >
        {sidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* ================= OVERLAY ================= */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed lg:static
          inset-y-0 left-0
          z-40
          w-72
          bg-white
          border-r border-border
          flex flex-col
          transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* ================= LOGO ================= */}

        <div className="p-6 border-b border-border">
          <h1 className="text-3xl text-primary font-bold">
            Ritles
          </h1>

          <p className="text-sm text-muted-foreground mt-2">
            Smart Mental Fatigue Detection
          </p>
        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    end={item.path === "/"}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex items-center
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      transition-all
                      ${
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : "hover:bg-primary/10 text-foreground"
                      }
                    `
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ================= AI TIPS ================= */}

        <div className="p-4 border-t border-border">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-yellow-500"
              />

              <h4 className="text-sm font-semibold text-primary">
                Insight Hari Ini
              </h4>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Cobalah beristirahat selama 5–10 menit setelah belajar
              selama 50 menit agar konsentrasi tetap optimal.
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <main className="flex-1 overflow-y-auto lg:ml-0">
        <div className="max-w-7xl mx-auto p-5 lg:p-8 pt-20 lg:pt-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}