## FeatureFlow HomeScreen SDK

A reusable React Native HomeScreen component packaged as an SDK.
You can import it directly into any React Native app and render the HomeScreen UI as-is.

---

## Installation

Install the SDK directly from GitHub:

```bash
npm install git+https://github.com/AbhiSingh9668/featureflow-homescreen-sdk.git

---

## Basic Usage
  
import { HomeScreen } from 'featureflow-sdk';

export default function App() {
  return <HomeScreen />;
}

## With Custom Props

import { HomeScreen } from 'featureflow-sdk';

export default function App() {
  return (
    <HomeScreen
      title="Welcome from Host App"
      buttonText="Continue"
      onPress={() => console.log('Button pressed')}
    />
  );
}
