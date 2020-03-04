import {
  GET_ERRORS,
  SAVE_TRANSACTION,
  GET_TRANSACTION
} from "../actions/types";

export default function(state, action) {
  switch (action.type) {
    case SAVE_TRANSACTION:
      return {
        ...state,       
        save_data: action.payload
      };
    case GET_TRANSACTION:
      return {
        ...state,
        get_data: action.payload
      };
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
