"use client";
import React, { useState } from "react";
import Sidebar from "../ui/Sidebar";
import { Plus } from "lucide-react";

import NewSnippetModal from "../ui/NewSnippetModal";

//Dashboard Layout

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-3 bg-gray-50">{children}</main>

      {/*Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-blue-600 transition-colors"
      >
        <Plus size={24} />
      </button>

      <NewSnippetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default DashboardLayout;
