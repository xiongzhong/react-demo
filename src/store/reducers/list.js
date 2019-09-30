import { SET_LIST } from '../actionTypes'
let initState = {
    loading: true,
    data: []
};

function list(state=initState, action) {
    switch (action.type) {
        case SET_LIST:
            return {
                data: action.data.data,
                loading: action.data.loading
            }
        default:
            return state;
    }
}

export default list
