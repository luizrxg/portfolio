import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function BuildingLottie({
  ...props
}: {
  [key: string]: any;
}){

  return (
    <DotLottieReact
      src="/assets/lotties/building.lottie"
      loop
      autoplay
      {...props}
    />
  )
}