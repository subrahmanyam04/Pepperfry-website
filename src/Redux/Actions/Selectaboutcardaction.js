import * as actionType from '../Actions/actionType';

export const setselectedaboutcard = (selectedAboutCard) => {
    console.log('Data setData action:', selectedAboutCard);
    
    return {
      type: actionType.SET_SELECTED_ABOUT_CARD,
      payload: selectedAboutCard,
      
     
    };
  
  };