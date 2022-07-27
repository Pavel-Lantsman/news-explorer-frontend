import React from 'react';
import { DEFAULT_CURRENT_USER } from '../utils/constants';

const CurrentUserContext = React.createContext(DEFAULT_CURRENT_USER);

export default CurrentUserContext;
