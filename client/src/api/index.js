import axios from "axios";

const reactUrl = "http://localhost:5000/tips/react";

export const fetchReactTips = () => axios.get(reactUrl);
export const createReactTip = (newTip) => axios.post(reactUrl, newTip);
export const updateReactTip = (id, updatedReactTip) =>
  axios.patch(`${reactUrl}/${id}`, updatedReactTip);
export const deleteReactTip = (id) => axios.delete(`${reactUrl}/${id}`);
