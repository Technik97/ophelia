import React from "react";

import { IProject } from "../../interfaces/projects";

interface ProjectTableProps {
  project: IProject
}

const ProjectTable: React.FC<ProjectTableProps> = ({ project }) => {
    return(
        <>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      <div>
                      <div className="font-bold">{ project.name }</div>
                    </div>
                    </div>
                  </td>
                <td>
                { project.description }
                {/* <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
              </td>
            <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>    
  </table>
</div>
</>
)}

export default ProjectTable;