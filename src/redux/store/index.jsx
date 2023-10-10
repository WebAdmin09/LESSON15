import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from 'prop-types'
import skillReducer from "../slices/skillSlice";
import authReducer from "../slices/authSlice";
import portfolioReducer, { portfolioService, } from "../services/PortfolioServices";


const reducer = {
    skill: skillReducer,
    auth: authReducer,
    [portfolioService.reducerPath]: portfolioReducer,

}

export const Store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(portfolioService.middleware),
});

const StoreProvider = ({ children }) => {
    return <Provider store={Store}>{children}</Provider>
}

StoreProvider.propTypes = {
    children: PropTypes.node,
};

export default StoreProvider