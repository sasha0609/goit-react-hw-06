import { createSlice } from "@reduxjs/toolkit";

const sliceContact = createSlice({
  name: "contact",
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index === -1) {
        state.items.push(action.payload);
      }
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});
export const selectContacts = (state) => state.contact.items;

export const { addContact, deleteContact } = sliceContact.actions;

export const contactReducer = sliceContact.reducer;
