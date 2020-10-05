const BuildingsReducer = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_BUILDINGS_LIST":
        return (state = action.buildings);
      case "ADD_BUILDING":
        return state.concat(action.newBuilding);
      case "EDIT_BUILDING":
        return state.map(
          e =>
            e._id === action.editedBuilding._id ? (e = action.editedBuilding) : e
        );
      case "REMOVE_BUILDING":
        return state.filter(e => e._id !== action.id);
      default:
        return state;
    }
  };
  
  export default BuildingsReducer;