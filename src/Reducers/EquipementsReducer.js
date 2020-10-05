const EquipementsReducer = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_EQUIPEMENTS_LIST":
        return (state = action.equipements);
      case "ADD_EQUIPEMENT":
        return state.concat(action.newEquipement);
      case "EDIT_EQUIPEMENT":
        return state.map(
          e =>
            e._id === action.editedEquipement._id ? (e = action.editedEquipement) : e
        );
      case "REMOVE_EQUIPEMENT":
        return state.filter(e => e._id !== action.id);
      default:
        return state;
    }
  };
  
  export default EquipementsReducer;