import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("Contact/addContact");
export const deleteContact = createAction("Contact/deleteContact");
export const changeFilter = createAction("filter/changeFilter");