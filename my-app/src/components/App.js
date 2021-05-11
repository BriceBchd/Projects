import React from 'react';
import '../styles/App.css';
import ProjectList from './data.js';

const title = 'Portfolio';
const description = 'Bienvenue sur mon portfolio !'

const projects = [
  {
    id: 1,
    title: "Crowdin",
    details: "Développement d'une application web de traduction de texte",
    tech: "PHP, Symfony",
    github: "Work in Progress"
  },
  {
    id: 2,
    title: "My Phone Book",
    details: "Développement d'un annuaire web",
    tech: "PHP, Laravel",
    github: "https://github.com/BriBla/MyPhoneBook"
  },
  {
    id: 3,
    title: "My CRD",
    details: "Développement d'un logiciel de stockage, suppression et récupération de donnée",
    tech: "C",
    github: "https://github.com/BriBla/MyCrd"
  },
  {
    id: 4,
    title: "The Hyrule Castle",
    details: "Création d'un jeu de stratégie tour par tour de type RPG",
    tech: "Unix, Bash",
    github: "https://github.com/BriBla/Shell-Hyrule-Castle"
  }
]

const handleSearchInputChange = event => {
  console.log(event.target.value);
}

const handleSearchInputKeyPress = event => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed! Search value is ' + event.target.value);
  }
}

const App = () => {
  return (
    <div class="App">
      <div class="App-header">
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>

      <label htmlFor="searchInput">Search: </label>
      <input class="searchInput"
        type="text"
        onChange={handleSearchInputChange}
        onKeyPress={handleSearchInputKeyPress} />

      <ProjectList projects={projects} />
    </div>
  );
}
export default App;
