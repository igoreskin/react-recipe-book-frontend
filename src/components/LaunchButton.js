import React from 'react';
import { Link } from 'react-router-dom';


export const LaunchButton = () => {
  return (
      <Link className="launchButton" to={'/recipes'}>Please click here to launch the application!</Link>
  )
}
