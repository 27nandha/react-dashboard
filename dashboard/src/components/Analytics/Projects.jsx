import React from "react";
import { LiaSortSolid } from "react-icons/lia";
const Projects = () => {
  const projects = [
    {
      name: "Website SEO",
      date: "17 June 2022",
      leader: "Eileen",
      team: ["🧑‍💻", "👩‍🎨", "👨‍💻"],
      status: 98,
    },
    {
      name: "Logo Designs",
      date: "12 Aug 2021",
      leader: "Keith",
      team: ["👨‍🎨", "👩‍💻", "🧑‍💻"],
      status: 26,
    },
    {
      name: "Social Banners",
      date: "03 Jan 2022",
      leader: "Owen",
      team: ["👩‍💻", "👨‍🎨", "🧑‍💻"],
      status: 43,
    },
    {
      name: "Crypto Admin",
      date: "29 Sept 2022",
      leader: "Allyson",
      team: ["👨‍💻", "👩‍🎨"],
      status: 70,
    },
    {
      name: "Create Website",
      date: "20 Mar 2021",
      leader: "Georgie",
      team: ["👩‍💻", "👨‍💻", "🧑‍🎨"],
      status: 30,
    },
  ];
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div>
        <table className="table-auto w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">NAME</th>
              <th className="p-3">LEADER</th>
              <th className="p-3">TEAM</th>
              <th className="p-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center">
                      {project.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{project.name}</div>
                      <div className="text-sm text-gray-500">
                        {project.date}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">{project.leader}</td>
                <td className="p-4">
                  <div className="flex -space-x-2">
                    {project.team.map((member, idx) => (
                      <span
                        key={idx}
                        className="w-8 h-8 bg-gray-200 text-center flex items-center justify-center rounded-full border border-white"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${project.status}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm">{project.status}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing 1 to 7 of 100 entries
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  page === 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
