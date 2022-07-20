import React from 'react';
import { defaultCurrentUser } from '../utils/constants';

const CurrentUserContext = React.createContext(defaultCurrentUser);

export default CurrentUserContext;
