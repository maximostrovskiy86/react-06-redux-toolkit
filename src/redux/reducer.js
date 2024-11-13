import {createReducer} from "@reduxjs/toolkit";
import {addContact, deleteContact, changeFilter} from "./actions";

const ContactsInitialState = [];

export const contactReducer = createReducer(ContactsInitialState, {
	[addContact]: (state, action) => [...state, action.payload],
	[deleteContact]: (state, action) => state.filter(task => task.id !== action.payload),
});
const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
		[changeFilter]: (state, action) =>  action.payload,
	})