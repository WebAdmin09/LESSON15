// import { createAction, createAsyncThunk, createReducer, nanoid } from "@reduxjs/toolkit";
// import { message } from "antd";
// import request from "../../api";
// const initialState = {
//     skills: [],
//     selected: null,
//     isModalOpen: false,
//     total: 0
// }
// // export const getSkill = createAction('fetchPosts/getSkill')
// export const showModal = createAction('skill/showModal')
// export const manageModal = createAction('skill/manageModal')
// export const editSkill = createAction('skill/editSkill')
// export const deleteSkill = createAction('skill/deleteSkill')
// export const addSkill = createAction('skill/addSkill', ({ name, percent }) => {
//     return {
//         payload: {
//             name,
//             percent,
//             id: nanoid()
//         }
//     }
// })

// export const getSkill = createAsyncThunk('skills/getSkill', async () => {
//     try {
//         const response = await request.get("skills");
//         console.log(response.data.data);
//         return response.data;
//     } catch (error) {
//         message.error('Undefined data')
//     }
// });
// const skillReducer = createReducer(initialState, {
//     [showModal]: (state, { payload }) => {
//         state.isModalOpen = true
//         state.selected = null
//         payload.resetFields()
//     },
//     [manageModal]: (state) => {
//         state.isModalOpen = !state.isModalOpen
//     },
//     [addSkill]: (state, { payload }) => {
//         if (state.selected === null) {
//             state.skills.push(payload)
//         } else {
//             state.skills = state.skills.map(el => {
//                 if (el.id === state.selected) {
//                     return payload
//                 } else {
//                     return el
//                 }
//             })
//         }
//     },

//     [deleteSkill]: (state, { payload }) => {
//         state.skills = state.skills.filter(el => el.id !== payload)
//     },
//     [editSkill]: (state, { payload: { id, form } }) => {
//         state.isModalOpen = true
//         let skill = state.skills.find((el) => el.id === id)
//         state.selected = id
//         form.setFieldsValue(skill)
//     },
//     extraReducer: {
//         [getSkill]: (state) => {
//             state.loading = true;
//         },
//         [getSkill.fulfilled]: (state, { payload }) => {
//             state.skills = payload.data;
//             state.loading = false
//             state.total = payload.pagination.total
//         },
//         [getSkill.rejected]: (state, { payload }) => {
//             state.error = payload;
//             state.loading = false;
//         }
//     }
// })


// export default skillReducer



////////////////////////////////////////////////wcsac/dcasca/xcascascsca

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../api";

const initialState = {
    skills: [],
    selected: null,
    isModalOpen: false,
    error: null,
    total: 0,
    loading: false,
    btnLoading: false,
};

export const getSkills = createAsyncThunk(
    "skill/getSkills",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await request.get("skills");
            return data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getSkill = createAsyncThunk(
    "skill/getSkill",
    async (action, { rejectWithValue }) => {
        try {
            const { data } = await request.get(`skills/${action}`);
            return data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const addSkill = createAsyncThunk(
    "skill/addSkill",
    async (action, { rejectWithValue }) => {
        try {
            await request.post("skills", action);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const updateSkill = createAsyncThunk(
    "skill/putSkill",
    async (action, { rejectWithValue }) => {
        try {
            await request.put(`skills/${action.id}`, action.values);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const deleteSkill = createAsyncThunk(
    "skill/deleteSkill",
    async (action, { rejectWithValue }) => {
        try {
            await request.delete(`skills/${action}`);
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        showModal(state, { payload }) {
            state.isModalOpen = true;
            state.selected = null;
            payload.resetFields();
        },
        manageModal(state) {
            state.isModalOpen = !state.isModalOpen;
        },
        editSkill(state, { payload }) {
            state.isModalOpen = true;
            state.selected = payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getSkills.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSkills.fulfilled, (state, { payload }) => {
                state.skills = payload.data;
                state.total = payload.pagination.total;
                state.loading = false;
            })
            .addCase(getSkills.rejected, (state, { payload }) => {
                state.error = payload;
                state.loading = false;
            })
            .addCase(addSkill.pending, (state) => {
                state.btnLoading = true;
            })
            .addCase(addSkill.fulfilled, (state) => {
                state.btnLoading = false;
            })
            .addCase(addSkill.rejected, (state) => {
                state.btnLoading = false;
            })
            .addCase(deleteSkill.pending, (state) => {
                state.btnLoading = true;
            })
            .addCase(deleteSkill.fulfilled, (state) => {
                state.btnLoading = false;
            })
            .addCase(deleteSkill.rejected, (state) => {
                state.btnLoading = false;
            });
    },
});
export const { manageModal, showModal, editSkill } = skillSlice.actions;

export default skillSlice.reducer;
