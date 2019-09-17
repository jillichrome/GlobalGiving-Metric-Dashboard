import {titles, names, themes, funds, goals, remaining, images, dates} from './../api';

const initState = {
  projects: [
    {id: '1', title: titles[0], image: images[0],organization: names[0], theme: themes[0], goal: goals[0], funding: funds[0], remaining: remaining[0], approvedDate: dates[0]},
    {id: '2', title: titles[1], image: images[1], organization: names[1], theme: themes[1], goal: goals[1], funding: funds[1], remaining: remaining[1], approvedDate: dates[1]},
    {id: '3', title: titles[2], image: images[2], organization: names[2], theme: themes[2], goal: goals[2], funding: funds[2], remaining: remaining[2], approvedDate: dates[2]},
    {id: '4', title: titles[3], image: images[3], organization: names[3], theme: themes[3], goal: goals[3], funding: funds[3], remaining: remaining[3], approvedDate: dates[3]},
    {id: '5', title: titles[4], image: images[4], organization: names[4], theme: themes[4], goal: goals[4], funding: funds[4], remaining: remaining[4], approvedDate: dates[4]},
    {id: '6', title: titles[5], image: images[5], organization: names[5], theme: themes[5], goal: goals[5], funding: funds[5], remaining: remaining[5], approvedDate: dates[5]},
    {id: '7', title: titles[6], image: images[6], organization: names[6], theme: themes[6], goal: goals[6], funding: funds[6], remaining: remaining[6], approvedDate: dates[6]},
    {id: '8', title: titles[7], image: images[7], organization: names[7], theme: themes[7], goal: goals[7], funding: funds[7], remaining: remaining[7], approvedDate: dates[7]},
    {id: '9', title: titles[8], image: images[8], organization: names[8], theme: themes[8], goal: goals[8], funding: funds[8], remaining: remaining[8], approvedDate: dates[8]},
    {id: '10', title: titles[9], image: images[9], organization: names[9], theme: themes[9], goal: goals[9], funding: funds[9], remaining: remaining[9], approvedDate: dates[9]}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;
