# TenWeekProgramMobile
A React Native implementation of a guided checklist...


## Log

- Initialized project with expo, the default RN configuration.

    expo init tenWeekBreathing


- Added AsyncStorage to project so we can persist users progress between app launches

    yarn add @react-native-community/async-storage


- Added React Navigation - the most straightforward solution in Expo

  yarn add @react-navigation/native

  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

  yarn add @react-navigation/material-top-tabs react-native-tab-view

- The mocks require each weeks screen to have the same top section with the stylized concentric circles.   I can't run Sketch (requires a Mac w/ OS 14.14.4 and I have an older one that cant run that OS, and a windows machine), but I was able to to pull in the sketch file into Figma.   I'm no Figma expert, I didn't find a way to export that background area with the overlaid design - but I was able to extract that image (screen capture + photoshop) and lay it out so that it matches the look in the mocks as far as possible given the variety of devices sizes.  In the best case it'd be nice to have a designer around who can just give me these assets, one lower res and one higher...

- RN docs for checkbox told me its deprecated, and point to:

  yarn add @react-native-community/checkbox

  This was failing... Module not found: Can't resolve '@react-native-community/checkbox',
  so I'm going to use the deprecated checkbox which should be fine.

  <em>TODO:</em> come back and figure out why it doesnt work.

  



