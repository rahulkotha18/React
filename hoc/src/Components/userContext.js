import React from 'react';
import { userInfo } from 'os';

const userContext=React.createContext('codeevolutions')

const userProvider = userContext.Provider

const userConsumer = userContext.Consumer

export {userConsumer,userProvider}