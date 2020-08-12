// Returns the object to be stored in AsyncStorage representing user progress through the app,
//   Unsets all checkboxes

import { content } from "./../utils/breathing_content";

export const initProgress = (begunOverride, maxOverride, launchesOverride) => {
  const weeks = Object.keys(content).length;      // How many weeks of content for this program

  const obj = {                       // 
    begun: begunOverride || false,
    max: maxOverride || 0,
    launches: launchesOverride || 1,
  };

  for (let i=1; i <= weeks; i++ ) {
    obj[i] = [];
    for (let j=0; j<content[i]['checkoffs'].length; j++ ) {
      obj[i][j] = false;
    }
  }

  return obj;
};
