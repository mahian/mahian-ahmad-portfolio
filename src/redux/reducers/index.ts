import { combineReducers } from "redux";
import { portfoliosReducer, selectedPortfoliosReducer } from "./portfolioReducer";
const reducers = combineReducers({
  allPortfolios: portfoliosReducer,
  portfolio: selectedPortfoliosReducer,
});
export default reducers;