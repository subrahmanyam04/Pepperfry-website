import * as actionType from '../Actions/actionType';



const initialState = {
    selectedAboutCard: []  ,

};

const Selectaboutcardreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SELECTED_ABOUT_CARD:
      const newStateSetData = {
        ...state,
        selectedAboutCard: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
    //   console.log('new sliderdta',sliderdata)
      return newStateSetData;
    

    
    default:
      return state;
  }
};

export default Selectaboutcardreducer;