import { ActionTypes } from "../constants/action-types";

export const setPortfolios = (portfolio: any) => {
  return {
    type: ActionTypes.SET_PORTFOLIOS,
    payload: portfolio,
  };
};
export const selectedPortfolio = (portfolio: any) => {
  return {
    type: ActionTypes.SELECTED_PORTFOLIO,
    payload: portfolio,
  };
};
export const removeSelectedPortfolio = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PORTFOLIO,
  };
};
