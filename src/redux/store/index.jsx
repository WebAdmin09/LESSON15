import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from 'prop-types'
import skillReducer from "../slices/skillSlice";
import authReducer from "../slices/authSlice";


const reducer = {
    skill: skillReducer,
    auth: authReducer,
}

export const Store = configureStore({ reducer });

const StoreProvider = ({ children }) => {
    return <Provider store={Store}>{children}</Provider>
}

StoreProvider.propTypes = {
    children: PropTypes.node,
};

export default StoreProvider