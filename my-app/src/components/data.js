import React from 'react';


const ProjectList = ({ projects }) => {
    return projects.map(projects => {
        return (
            <div key={projects.id}>
                <h2>List of Projects</h2>
                <span>
                    <a href={projects.github}><h4>{projects.title}</h4></a>
                </span>
                <span>{projects.details}</span>
                <span>  |  <strong>{projects.tech}</strong></span>
                <br /><br />
            </div>
        )
    })
}

export default ProjectList;