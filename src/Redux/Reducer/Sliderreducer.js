// reducer.js
import * as actionType from '../Actions/actionType';



const initialState = {
  sliderdata: []  ,

};

const Sliderreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SLIDER_DATA:
      const newStateSetData = {
        ...state,
        sliderdata: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
    //   console.log('new sliderdta',sliderdata)
      return newStateSetData;
    
    

    //   case actionType.SET_SELECTED_ABOUT_CARD:
    //     // console.log('New state after SET_DATA:', pop);
    //     // console.log('New state after payload:', payload);
    //     const pop = {
    //       ...state,
    //       selectedAboutCard: action.payload,
    //     };
    //     console.log('New state after SET_DATA:', pop);
    //     return pop;
    
    default:
      return state;
  }
};

export default Sliderreducer;