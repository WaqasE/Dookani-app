import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'

import AppStack from './app/navigation/AppStack'
import SearchCategory from './app/context/SearchCategory'

export default function App() {
  const [searchCat, setSearchCat] = useState('For You');
  return (
    <NavigationContainer>
      <SearchCategory.Provider value={{searchCat, setSearchCat}}>
        <AppStack/>
      </SearchCategory.Provider>
    </NavigationContainer>
  );
}
