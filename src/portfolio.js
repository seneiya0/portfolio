const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://seneiya0.github.io/',
  title: 'SC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Seneiya Cooke',
  role: 'Full-Stack developer',
  description:
    'I\'ve completed Flatiron Schools Software Engineering bootcamp and learned JavaScript, React, and Ruby on Rails. I\'ve also started learning python on my own. I love challenging myself and learning new technologies. Aside from coding I love gaming, trying new foods, and spending time with family!',
  resume: 'https://docs.google.com/document/d/1uSPiN_8vm9j9EiQenbaxoSwoo8NvEk1ZEsScsUOOBbo/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/seneiya/',
    github: 'https://github.com/seneiya0',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Advice Generator',
    description:
      'This web app generates a random slip of advice upon clicking a button',
    stack: ['JavaScript','React', 'CSS'],
    sourceCode: 'https://github.com/seneiya0/advice-generator',
    livePreview: 'https://advicegen.netlify.app/',
  },
  {
    name: 'SaidIt',
    description:
      'Forum web app where users can create posts with topics attached to them, as well as upvote/downvote and reply to other users posts.',
    stack: ['Rails', 'React', 'CSS', 'PostgreSQL'],
    sourceCode: 'https://github.com/seneiya0/phase-5-capstone-proj',
    livePreview: 'https://youtu.be/P5oHh399LfM',
  },
  {
    name: 'Socialize',
    description:
      'Social media web app where users can create an account to post, view, and like other miniblogs.',
    stack: ['Rails', 'React','CSS', 'PostgreSQL'],
    sourceCode: 'https://github.com/seneiya0/Phase-4-project',
    livePreview: 'https://socialize-project-app.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Ruby',
  'Rails',
  'Git',
  'Ubuntu',
  'SQLite',
  'PostgreSQL',
  'Heroku',
  'Netlify'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'seneiyacooke@gmail.com',
}

export { header, about, projects, skills, contact }
