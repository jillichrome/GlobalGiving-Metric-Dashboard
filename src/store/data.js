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

export const remaining = [];
for (let i=0; i < totalProjects; i++) {
  remaining.push(dataList[i].remaining)
}

export const images = [];
for (let i=0; i < totalProjects; i++) {
  images.push(dataList[i].image.imagelink[2].url)
}

export const dates = [];
for (let i=0; i < totalProjects; i++) {
  dates.push(dataList[i].approvedDate)
}

const regions = [];
for (let i=0; i < totalProjects; i++) {
  regions.push(dataList[i].region)
}

function themefreq(themes){
  return themes.reduce((map,theme) => Object.assign(map, {
    [theme] : (map[theme]) ? map[theme] + 1 : 1 }), {});
}
export const labels = Object.keys(themefreq(themes));
export const numTheme = Object.values(themefreq(themes));

function regionfreq(regions) {
  return regions.reduce((map,region) => Object.assign(map, {
    [region] : (map[region]) ? map[region] + 1 : 1 }), {});
}
export const regLabels = Object.keys(regionfreq(regions));
export const numRegion = Object.values(regionfreq(regions));
