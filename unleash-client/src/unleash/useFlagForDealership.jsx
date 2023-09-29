import { useUnleashContext, useFlag } from '@unleash/proxy-client-react';
import {useEffect} from "react";

// https://docs.getunleash.io/reference/unleash-context
export const useFlagForDealership = (flagName) => {
    const dealershipId = "2195"; // get dealership id from params
    const enabled = useFlag(flagName);
    const updateContext = useUnleashContext();

    useEffect(() => {
        updateContext({userId: dealershipId})
    }, [updateContext]);

    return enabled;
}
