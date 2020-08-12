# TenWeekProgramMobile

###A React Native implementation of a guided checklist...

### Whats left:

  -- Tab Bar customization; the underline doesnt behave well out of the box
  -- The Reset Program button functionality
  -- Finishing functionality: The Congrats text, ...
  -- misc css
  -- The ability to add hyperlinks in the text on the screens
  -- Explore problems I had with react-native-checkbox and my dev envt

### Problems I had:

  -- Sketch didnt run on windows, I import the file into Figma
  -- Even though I extract exact font sizes, the nature of mobile makes things look relatively different on real device
  -- updating Expo client on my phone crashes everytime I push code to it, even boilerplate code
  -- Time constraint led me to not ask questions I would've asked if this was a real project:
      -- What element of the design have to be pixel perfect?
      -- What elements can stand to look somewhat different?


### Log


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
  so I'm going to use the deprecated checkbox which is not as good because you can't style it.

  <em>TODO:</em> come back and figure out why it doesnt work.

  



