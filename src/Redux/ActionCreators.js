import * as ActionTypes from "./ActionTypes";

import { SAMPLES } from "../shared/samples";
import { baseUrl } from "../shared/baseUrl";

export const fetchSamples = () => (dispatch) => {
  dispatch(samplesLoading(true));

  return fetch(baseUrl + "samples")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((samples) => dispatch(addSamples(samples)))
    .catch((error) => dispatch(samplesFailed(error.message)));
};
/* setTimeout(() => {
    dispatch(addSamples(SAMPLES));
  }, 2000);*/

export const samplesLoading = () => ({
  type: ActionTypes.SAMPLES_LOADING,
});
export const samplesFailed = (errmsg) => ({
  type: ActionTypes.SAMPLES_FAILED,
  payload: errmsg,
});

export const addSamples = (samples) => ({
  type: ActionTypes.ADD_SAMPLES,
  payload: samples,
});
