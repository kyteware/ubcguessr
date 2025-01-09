import React, { useRef } from 'react';
import PhotoSphereViewer from 'react-photo-sphere-viewer';

function My360Image() {
  const viewerRef = useRef(null);

  return (
    <PhotoSphereViewer 
      panorama="/path/to/your/360image.jpg" 
      defaultLat={0} 
      defaultLong={0} 
      ref={viewerRef} 
    />
  );
}

export default My360Image;