const data = require('./test.json');
const dataList = data.projects.project;
const totalProjects = dataList.length;

export const titles = [];
for (let i = 0; i < totalProjects; i++) {
  titles.push(dataList[i].title);
}

export const names = [];
for (let i=0; i < totalProjects; i++) {
  names.push(dataList[i].organization.name);
}

export const themes =[];
for (let i=0; i < totalProjects; i++) {
  themes.push(dataList[i].themeName)
}

export const funds =[];
for (let i=0; i < totalProjects; i++) {
  funds.push(dataList[i].funding)
}

export const goals =[];
for (let i=0; i < totalProjects; i++) {
  goals.push(dataList[i].goal)
}
