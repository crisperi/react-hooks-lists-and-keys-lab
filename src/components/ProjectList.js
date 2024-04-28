import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
const projectItem = projects.map((items)=>{
  return (
  <ProjectItem
    key={items.id}
    name={items.name}
    about={items.about}
    technologies={items.technologies}
  />
  )
})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItem}</div>
    </div>
  );
}

export default ProjectList;
