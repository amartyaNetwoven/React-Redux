import { SHOW_CONTACT } from "../constants/action_type";
import { CHANGE_CONTACT } from "../constants/action_type";
import { UPDATE_CONTACT } from "../constants/action_type";

const initialState = {
    contacts: [
        { _id: 0, name: "User 1", company: "Company 1", age: 10 },
        { _id: 1, name: "User 2", company: "Company 2", age: 20 }
    ],
    showContactForm: false,
    showDeleteButton: false,
    contact_data: {}
};

function rootReducer(state = initialState, action) {
    let tempState = { ...state }

    if (action.type === SHOW_CONTACT) {
        tempState.showContactForm = action.payload.showContactForm;
        tempState.showDeleteButton = action.payload.showDeleteButton;
        tempState.contact_data = action.payload.contact_data
        return tempState;
    }
    if (action.type === CHANGE_CONTACT) {
        tempState.contact_data = action.payload
        return tempState;
    }
    if (action.type === UPDATE_CONTACT) {
        tempState.contacts = action.payload.contacts;
        tempState.showContactForm = action.payload.showContactForm;
        return tempState;
        
        // var payload = action.payload
        // var index_of_contact = payload.contacts.findIndex(data =>
        //     data._id === payload.updated_contact._id)
        // tempState.contacts[index_of_contact] = payload.updated_contact
        // return tempState
    }

    return tempState;
};

export default rootReducer;