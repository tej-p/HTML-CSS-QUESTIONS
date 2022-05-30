import { legacy_createStore as createStore} from "redux"
// import reducer from "./reducers/index"
import { cityReducer as reducer } from "./reducers/cityReducer";

export const store = createStore(reducer, []);

// export default store;