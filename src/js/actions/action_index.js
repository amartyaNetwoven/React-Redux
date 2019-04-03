import { ADD_CONTACT } from './../constants/action_type';
import { SHOW_CONTACT } from './../constants/action_type';
import { CHANGE_CONTACT } from './../constants/action_type';
import { UPDATE_CONTACT } from './../constants/action_type';

export const addContact = (payload) => {
    return { type: ADD_CONTACT, payload }
};

export const showContact = (payload) => {
    return { type: SHOW_CONTACT, payload }
};

export const changeContact = (payload) => {
    return { type: CHANGE_CONTACT, payload }
};

export const updateContact = (payload) => {
    return { type: UPDATE_CONTACT, payload }
    
}