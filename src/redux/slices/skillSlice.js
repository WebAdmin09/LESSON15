import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
    skills: [],
    selected: null,
    isModalOpen: false,
}

export const getSkill = createAction('skill/getSkill')
export const showModal = createAction('skill/showModal')
export const manageModal = createAction('skill/manageModal')
export const editSkill = createAction('skill/editSkill')
export const deleteSkill = createAction('skill/deleteSkill')
export const addSkill = createAction('skill/addSkill', ({ name, percent }) => {
    return {
        payload: {
            name,
            percent,
            id: nanoid()
        }
    }
})

const skillReducer = createReducer(initialState, {

    [showModal]: (state) => {
        state.isModalOpen = true
        state.selected = null
    },
    [manageModal]: (state) => {
        state.isModalOpen = !state.isModalOpen
    },
    [addSkill]: (state, { payload }) => {
        state.skills.push(payload)
    },

    [deleteSkill]: (state, { payload }) => {
        state.skills = state.skills.filter(el => el.id !== payload)
    },
    [editSkill]: (state, { payload }) => {
        state.isModalOpen = true
        let skill = state.skill.find((el) => el.id === payload)
        state.selected = payload
    }
})


export default skillReducer
