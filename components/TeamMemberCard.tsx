"use client";

import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  core: string[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="bg-gray-50 p-8 rounded-lg">
        <div className="text-center mb-6">
          <button
            type="button"
            aria-label={`View enlarged photo of ${member.name}`}
            onClick={() => setIsOpen(true)}
            className="mx-auto mb-4 block rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-500/40"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-yellow-600 cursor-zoom-in transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl"
            />
          </button>
          <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-yellow-600 font-semibold">{member.title}</p>
        </div>

        <p className="text-sm text-gray-600 mb-3 font-semibold">Specialty: {member.specialty}</p>
        <p className="text-gray-700 mb-4">{member.bio}</p>
        <ul className="space-y-2">
          {member.core.map((item) => (
            <li key={item} className="text-gray-700 flex items-start">
              <span className="text-yellow-600 mr-3">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged photo of ${member.name}`}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-2xl w-full" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white text-sm font-semibold hover:text-yellow-400"
            >
              Close
            </button>
            <img
              src={member.image}
              alt={`${member.name} enlarged portrait`}
              className="w-full max-h-[80vh] object-contain rounded-xl border-4 border-yellow-600 shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
