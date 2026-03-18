import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducer/authReducer.js';
import userReducer from './reducer/userReducer.js';
import userClientReducer from './reducer/userClientReducer.js'
import locationReducer from './reducer/locationReducer.js'
import categoryReducer from './reducer/categoryReducer.js'
import businessListReducer from './reducer/businessListReducer.js'
import rolesReducer from './reducer/rolesReducer.js';
import enquiryReducer from './reducer/enquiryReducer.js';
import startProjectReducer from './reducer/startProjectReducer.js'
import otpReducer from './reducer/otpReducer.js'
import clientAuthReducer from './reducer/clientAuthReducer.js'
import phonepeReducer from './reducer/phonePayReducer.js';
import leadsReducer from './reducer/leadsReducer.js';
import advertisementReducer from './reducer/advertisementReducer.js';
import seoReducer from './reducer/seoReducer.js';
import seoPageContentReducer from './reducer/seoPageContentReducer.js'
import mrpReducer from './reducer/mrpReducer.js';
import enquiryNowReducer from './reducer/popularSearchesReducer.js';
import reviewReducer from './reducer/reviewReducer.js';
import advertiseReducer from './reducer/advertiseReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer: userReducer,
  userClientReducer: userClientReducer,
  locationReducer: locationReducer,
  categoryReducer: categoryReducer,
  businessListReducer: businessListReducer,
  rolesReducer: rolesReducer,
  enquiryReducer: enquiryReducer,
  startProjectReducer: startProjectReducer,
  otp: otpReducer,
  clientAuth: clientAuthReducer,
  phonepe: phonepeReducer,
  leads: leadsReducer,
  advertisement: advertisementReducer,
  seoReducer,
  seoPageContentReducer,
  mrp: mrpReducer,
  enquiryNow: enquiryNowReducer,
  reviews: reviewReducer,
  advertise: advertiseReducer, 
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
