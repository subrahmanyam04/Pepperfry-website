import * as types from '../Actions/actionType';
import { auth, } from "../../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";



const registerStart = () => ({
    type: types.REGISTER_START,
  });
  
  
  const registerSuccess = ({ user, additionalData }) => ({
    type: types.REGISTER_SUCCESS,
    payload: { user, additionalData },
  });
  
  const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
  });
   export const loginStart = () => ({
    type: types.LOGIN_START,
  });
  
   export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
    
  });
  
  export const loginError = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
  });
  // const logoutStart = () => ({
  //   type: types.LOGOUT_START,
  // });
  
  // const logoutSuccess = () => ({
  //   type: types.LOGOUT_SUCCESS,
  // });
  
  // const logoutError = (error) => ({
  //   type: types.LOGOUT_FAIL,
  //   payload: error,
  // });
 
 
  export const registerInitiate = (email,password) => {
    console.log(registerInitiate,"userrrrrrrrrrrrrrrr")
   
    return function (dispatch) {
    
    
      dispatch(registerStart());
      
      createUserWithEmailAndPassword(auth, email, password)
    

        .then(({ user }) => {
      
   
          // 
          dispatch(registerSuccess({ user}));
          console.log(user,"userrrrrrrrrrrrrrrr")
          
          
        })
        
        .catch((error) => dispatch(registerError(error.message)));
    };
  };

 
  export const loginInitiate = (email, password) => {
    return function (dispatch) {
      // let  navigate = useNavigate();
  
      dispatch(loginStart());
    
    
        signInWithEmailAndPassword(auth,email, password)
       .then(async (res) => {
          
          const user = res.user;
          const userId = user.uid
          console.log(user.uid,"res");
          
          dispatch(loginSuccess(user));
         
          // navigate("/",{state:user});
          // if(user!==null){
          //  
          // }
      })
      .catch((error) => dispatch(loginError(error.message)))
      alert("errorrrrrrrrrrrrrr")
    };
  };
 
      

  // export const logoutInitiate = () => {

  //   return function (dispatch) {
  //     dispatch(logoutStart());
  //     signOut(auth).then(() => {
  //       dispatch(logoutSuccess())
  //     }).catch((error) => {
  //       dispatch(logoutError(error.message))
  //     });
  //     // signOut(auth)
  //     //   .then((resp) => dispatch(logoutSuccess()))
  //     //   .catch((error) => dispatch(logoutError(error.message)));
  //   };
  // };
  export const  logout = ()=>(
  {
type:types.LOGOUT,
  });