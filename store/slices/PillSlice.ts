import { createSlice } from "@reduxjs/toolkit";

const PillSlice = createSlice({
    name: "pill",
    initialState: {
        value: "All"
    },
    reducers: {
        all: (state) => {
            state.value = "All"
        },
        firePlace: (state) => {
            state.value = "Fireplace"
        },
        freeParking: (state) => {
            state.value = "Free Parking"
        },
        selfCheckin: (state) => {
            state.value = "Self Checkin"
        },
    }
})

export const {all, firePlace, freeParking, selfCheckin} = PillSlice.actions;
export const PillReducer = PillSlice.reducer