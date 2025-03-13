
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
    <div className={cn("h-screen w-64 bg-zinc-50 border-r border-zinc-200", className)}>
      <div className="p-4 border-b border-zinc-200 flex items-center space-x-2">
        <div className="bg-zinc-800 text-white p-1 rounded">
          <span className="text-xs font-medium">snap</span>
        </div>
        <div className="text-sm font-medium">City of Hobsons Bay</div>
      </div>
      
      <nav className="p-2">
        <ul className="space-y-1">
          <NavItem icon={<FileText size={18} />} label="Authorities" active />
          <NavItem icon={<ClipboardList size={18} />} label="Reports" />
          <NavItem icon={<AlertTriangle size={18} />} label="Incident Types" />
          <NavItem icon={<Users size={18} />} label="Users" />
          <NavItem icon={<Smartphone size={18} />} label="Snappers" />
          <NavItem icon={<BarChart2 size={18} />} label="Dashboards" />
          <NavItem icon={<ClipboardList size={18} />} label="Reports" />
          <NavItem icon={<Package size={18} />} label="Assets" />
          <NavItem icon={<FileSymlink size={18} />} label="Authority" />
          <NavItem icon={<AlertTriangle size={18} />} label="Incident Types" />
          <NavItem icon={<Clock size={18} />} label="Account" />
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-xs text-zinc-500 border-t border-zinc-200">
        <div className="flex justify-between">
          <span>Terms of use</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Help Centre</span>
          <span>Website</span>
        </div>
        <div className="mt-2 text-center">
          <span>Copyright © 2025 Snap Send Solve.</span>
        </div>
      </div>
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
          "flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors",
          active
            ? "bg-snapper-100 text-snapper-900"
            : "text-zinc-700 hover:bg-zinc-100"
        )}
      >
        <span className={active ? "text-snapper-700" : "text-zinc-500"}>{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}
