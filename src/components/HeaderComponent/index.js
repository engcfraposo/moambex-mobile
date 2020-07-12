import React from 'react';

import { 

  Wrapper,
  Header,
  HeaderContainer,
  Logo

} from './styles';


import { AntDesign } from '@expo/vector-icons'

import logo from '../../assets/logo.png'

export default function HeaderComponent() {
  return (
    <Wrapper> 

      <Header>
       
        <HeaderContainer>

        <Logo source={logo} /> 

        <AntDesign name="setting" size={30} color="#10c86e" />
        </HeaderContainer>
      
      </Header>
    
    </Wrapper>
  );
}
