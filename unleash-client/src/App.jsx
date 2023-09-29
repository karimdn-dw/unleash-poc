import {useFlagForDealership} from "./unleash/useFlagForDealership";

const App = () => {
    const enabled = useFlagForDealership('location-feature-permission');
    console.log("enabled: ", enabled === true)

  if (enabled) {
    return <div>Feature enabled</div>
  } else {
    return <div>Feature disabled</div>
  }
}

export default App
