import React from 'react';

import {Wrapper, ScrollContainer } from './styles'

import HeaderComponent from '../../components/HeaderComponent'

import TrackingComponent from '../../components/TrackingComponent'

export default function Pending() {
  return (
      <>
      
      <Wrapper>
      <HeaderComponent/>
      <ScrollContainer>
      <TrackingComponent />
      <TrackingComponent />
      <TrackingComponent />
      <TrackingComponent />
      <TrackingComponent />
      <TrackingComponent />
      <TrackingComponent />
      <TrackingComponent />
      </ScrollContainer>
      </Wrapper>
    </>
  );
}
