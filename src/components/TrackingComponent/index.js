import React from 'react';

import {TrackingContainer, TrackingBox, TrackingName, TrackingCode, TrackingInfo, TrackingSeparator } from './styles'


export default function TrackingComponent() {
  return (
      <>
      <TrackingContainer>
      <TrackingBox>
      <TrackingName>Pokemon Go Plus</TrackingName>
      <TrackingSeparator/>
      <TrackingCode>DU897123996BR</TrackingCode>
      </TrackingBox>
      <TrackingInfo>Em Trânsito para CTE Recife - Recife/PE</TrackingInfo>
      <TrackingSeparator/>
      </TrackingContainer>
    </>
  );
}
