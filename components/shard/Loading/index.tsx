import React from 'react';
import Overlay from '../Overlay';
import Image from 'next/image';
import loadingGif from '../../../public/gif/loading.gif';

export default function Loading() {
  return (
    <Overlay>
      <div>
        <Image src={loadingGif} alt="Loading image" />
      </div>
    </Overlay>
  );
}
