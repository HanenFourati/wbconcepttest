const BenefitsReducer = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_BENEFITS_LIST":
        return (state = action.benefits);
      case "ADD_BENEFIT":
        return state.concat(action.newBenefit);
      default:
        return state;
    }
  };
  
  export default BenefitsReducer;