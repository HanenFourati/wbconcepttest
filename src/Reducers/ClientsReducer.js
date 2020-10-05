const ClientsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_CLIENTS_LIST":
      return (state = action.clients);
    case "ADD_CLIENT":
      return state.concat(action.newClient);
    case "EDIT_CLIENT":
      return state.map(
        e =>
          e._id === action.editedClient._id ? (e = action.editedClient) : e
      );
    case "REMOVE_CLIENT":
      return state.filter(e => e._id !== action.id);
    default:
      return state;
  }
};

export default ClientsReducer;
