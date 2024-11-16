import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  UserCheck,
  Activity,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  Home
} from 'lucide-react';

// Reusable Button component
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Dropdown Menu Components
const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="relative">{children(isOpen, setIsOpen)}</div>;
};

const DropdownMenuTrigger = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

const DropdownMenuContent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[rgba(31,41,55,0.5)] ring-1 ring-black ring-opacity-5">
      <div className="py-1">{children}</div>
    </div>
  );
};

const DropdownMenuItem = ({ children, className, onClick }) => {
  return (
    <div
      className={`px-4 py-2 text-sm cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Sidebar Components
const Sidebar = ({ children, className }) => {
  return <div className={`w-64 h-full ${className}`}>{children}</div>;
};

const SidebarHeader = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const SidebarMenu = ({ children }) => <nav>{children}</nav>;
const SidebarMenuItem = ({ children }) => <div className="mb-1">{children}</div>;
const SidebarMenuButton = ({ children, className, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-lg w-full ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

function AdminDashboard() {
  const navigate = useNavigate();

  // Maintain original admin check functionality
  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  

  return (
    <div className="flex h-screen bg-[#111827] text-white">
      <Sidebar className="border-r border-[#374151] bg-[rgba(31,41,55,0.5)]">
        <SidebarHeader className="p-4">
          <h2 className="text-2xl font-bold text-white">Admin Portal</h2>
        </SidebarHeader>
        <SidebarMenu>
          {[
            { icon: Home, label: 'Home', onClick: () => navigate('/') },
            { icon: UserCheck, label: 'Coach Management', onClick: () => navigate('/admin/coaches') },
            { icon: Users, label: 'User Management', onClick: () => navigate('/admin/users') },
            { icon: Activity, label: 'Activities', onClick: () => navigate('/admin/activity') },
            // { icon: MessageSquare, label: 'Community', onClick: () => window.open('#', '') },
          ].map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                className="w-full justify-start text-[#D1D5DB] hover:bg-[rgba(55,65,81,0.4)] hover:text-white transition-all duration-200 ease-in-out"
                onClick={item.onClick}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>

      <div className="flex-1 overflow-auto bg-[#111827]">
        <header className="flex items-center justify-between p-4 bg-[rgba(31,41,55,0.5)] border-b border-[#374151] shadow-md">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <DropdownMenu>
            {(isOpen, setIsOpen) => (
              <>
                <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)}>
                  <Button className="h-8 w-8 p-0 rounded-full overflow-hidden border-2 border-[#10B981] hover:border-[#059669] transition-colors duration-200">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Admin avatar"
                      className="rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent isOpen={isOpen}>
                  <DropdownMenuItem
                    className="hover:bg-[rgba(55,65,81,0.4)] text-[#D1D5DB] hover:text-white transition-colors duration-200"
                    onClick={() => navigate('/admin/settings')}
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-[rgba(55,65,81,0.4)] text-[#D1D5DB] hover:text-white transition-colors duration-200"
                    onClick={() => navigate('/logout')}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </>
            )}
          </DropdownMenu>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Welcome onboard!</h2>
            <p className="text-[#9CA3AF] mb-6">Your configuration is completed. Manage your platform efficiently.</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/admin/coaches" className=" no-underline block">
              <div className="bg-[rgba(31,41,55,0.5)] hover:bg-[rgba(55,65,81,0.4)] p-6 rounded-lg shadow-lg border border-[#374151] transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                <UserCheck className="h-8 w-8 mb-4 text-[#10B981]" />
                <h3 className="text-xl font-semibold mb-2 text-white">Coach Management</h3>
                <p className="text-[#9CA3AF]">Manage coach activities and approve pending requests.</p>
                <div className="mt-4 text-[#10B981]">Learn more →</div>
              </div>
            </a>

            <Link to="/admin/users" className="block no-underline">
              <div className="bg-[rgba(31,41,55,0.5)] hover:bg-[rgba(55,65,81,0.4)] p-6 rounded-lg shadow-lg border border-[#374151] transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                <Users className="h-8 w-8 mb-4 text-[#10B981]" />
                <h3 className="text-xl font-semibold mb-2 text-white">User Management</h3>
                <p className="text-[#9CA3AF]">Manage user activities and permissions.</p>
                <div className="mt-4 text-[#10B981]">Learn more →</div>
              </div>
            </Link>

            <Link to="/admin/activity" className="block no-underline">
              <div className="bg-[rgba(31,41,55,0.5)] hover:bg-[rgba(55,65,81,0.4)] p-6 rounded-lg shadow-lg border border-[#374151] transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                <Activity className="h-8 w-8 mb-4 text-[#10B981]" />
                <h3 className="text-xl font-semibold mb-2 text-white">Activities</h3>
                <p className="text-[#9CA3AF]">Explore and manage platform activities.</p>
                <div className="mt-4 text-[#10B981]">Explore →</div>
              </div>
            </Link>

            <a href="#" className="block no-underline">
              <div className="bg-[rgba(31,41,55,0.5)] hover:bg-[rgba(55,65,81,0.4)] p-6 rounded-lg shadow-lg border border-[#374151] transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                <MessageSquare className="h-8 w-8 mb-4 text-[#10B981]" />
                <h3 className="text-xl font-semibold mb-2 text-white">Community</h3>
                <p className="text-[#9CA3AF]">Join our Discord and stay updated.</p>
                <div className="mt-4 text-[#10B981]">Join now →</div>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;