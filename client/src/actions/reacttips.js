import * as api from "../api";
//Action Creators
export const getReactTips = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReactTips();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createReactTip = (tip) => async (dispatch) => {
  try {
    const { data } = await api.createReactTip(tip);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateReactTip = (id, tip) => async (dispatch) => {
  try {
    const { data } = await api.updateReactTip(id, tip);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReactTip = (id) => async (dispatch) => {
  try {
    await api.deleteReactTip(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
