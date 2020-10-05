import {combineReducers} from 'redux';

import ClientsReducer from "./ClientsReducer.js";
import BuildingsReducer from "./BuildingsReducer.js";
import EquipementsReducer from "./EquipementsReducer.js";
import BenefitsReducer from "./BenefitsReducer.js";
import TasksReducer from "./TasksReducer.js";

export default combineReducers({
    ClientsReducer,
    BuildingsReducer,
    EquipementsReducer,
    BenefitsReducer,
    TasksReducer
  });