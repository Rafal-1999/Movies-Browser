import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: []
    }
});

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;

export default peopleSlice.reducer;
