import React, { useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

function My360Image() {
  const viewerRef = useRef(null);

  return (
    <ReactPhotoSphereViewer 
      src="/360images/sample.jpg"
      ref={viewerRef}
      height={"100%"}
      width={"100%"}
    />
  );
}

export default My360Image;