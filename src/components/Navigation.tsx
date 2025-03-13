
import React from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  ClipboardList, 
  AlertTriangle, 
  Users, 
  Smartphone, 
  BarChart2, 
  Package, 
  FileSymlink, 
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <div className={cn("fixed top-0 left-0 h-screen w-56 bg-zinc-50 border-r border-zinc-200 flex flex-col z-40", className)}>
      <div className="p-4 flex items-center space-x-2 bg-zinc-900 text-white">
        <div className="text-white/80">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="currentColor"/>
            <path d="M7 12.5H17M7 8.5H13M7 16.5H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text-sm font-medium">City of Hobsons Bay</div>
      </div>
      
      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-1">
          <NavItem icon={<FileText size={16} />} label="Authorities" active />
          <NavItem icon={<ClipboardList size={16} />} label="Reports" />
          <NavItem icon={<AlertTriangle size={16} />} label="Incident Types" />
          <NavItem icon={<Users size={16} />} label="Users" />
          <NavItem icon={<Smartphone size={16} />} label="Snappers" />
          <NavItem icon={<BarChart2 size={16} />} label="Dashboards" />
          <NavItem icon={<ClipboardList size={16} />} label="Reports" />
          <NavItem icon={<Package size={16} />} label="Assets" />
          <NavItem icon={<FileSymlink size={16} />} label="Authority" />
          <NavItem icon={<AlertTriangle size={16} />} label="Incident Types" />
          <NavItem icon={<Clock size={16} />} label="Account" />
        </ul>
      </nav>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <li>
      <Link
        to="/"
        className={cn(
          "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
          active
            ? "bg-orange-50 text-orange-900 border-l-2 border-orange-500"
            : "text-zinc-700 hover:bg-zinc-100"
        )}
      >
        <span className={active ? "text-orange-500" : "text-zinc-500"}>{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}
