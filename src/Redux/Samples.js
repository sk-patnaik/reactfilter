import * as ActionTypes from "./ActionTypes";

export const Samples = (
  state = {
    isLoading: true,
    errMssg: null,
    samples: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SAMPLES:
      return {
        ...state,
        isLoading: false,
        errMssg: null,
        samples: action.payload,
      };
    case ActionTypes.SAMPLES_LOADING:
      return { ...state, isLoading: true, errMssg: null, samples: [] };
    case ActionTypes.SAMPLES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMssg: action.payload,
        samples: [],
      };
    default:
      return state;
  }
};
