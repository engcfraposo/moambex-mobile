import styled from 'styled-components/native'


export const Button = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background: #ff5757;
`;

export const Label = styled.Text`
    color: ${({ focused }) => focused ? '#000' : '#fff'};
    font-size: 12px;
`;
