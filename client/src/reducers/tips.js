export default (tips = [], action) => {
  switch (action.type) {
    case "DELETE":
      return tips.filter((tip) => tip._id != action.payload);
    case "UPDATE":
      return tips.map((tip) =>
        tip._id === action.payload.id ? action.payload : tip
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...tips, action.payload];
    default:
      return tips;
  }
};
