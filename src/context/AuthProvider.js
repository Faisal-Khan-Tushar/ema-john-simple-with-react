import React, { createContext } from 'react';

export const AuthContext =createContext('')

const AuthProvider = ({children}) => {
  // const {children}=props;
  return (
    //ei jaygay  age div chilo, but amra div ke return korbo na. Amra return korbo hocche AuthContext.Provider ke
    <AuthContext.Provider>
      {/* ei je ekta componnet ekhon tar ekta property nibo amra.  */}
  {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;