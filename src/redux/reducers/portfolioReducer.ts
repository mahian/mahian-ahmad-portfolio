import { ActionTypes } from "../constants/action-types";
const intialState = {
  portfolios: [
    {
      thumbnail: "assets/images/portfolio/1.jpg"
    },
    {
      thumbnail: "assets/images/portfolio/2.jpg"
    },
    {
      thumbnail: "assets/images/portfolio/3.jpg"
    },
  ],
};

export const portfoliosReducer = (state = intialState, { type, payload } : any) => {
  switch (type) {
    case ActionTypes.SET_PORTFOLIOS:
      return { ...state, portfolios: payload };
    default:
      return state;
  }
};

export const selectedPortfoliosReducer = (state = {}, { type, payload } : any) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PORTFOLIO:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PORTFOLIO:
      return {};
    default:
      return state;
  }
};
