const port = 3000;

const { createApp } = require('@unleash/proxy');

// https://docs.getunleash.io/how-to/how-to-run-the-unleash-proxy#run-proxy-as-node-app
const app = createApp({
    unleashUrl: 'https://app.unleash-hosted.com/demo/api/',
    unleashApiToken: 'unleash-dw-poc:development.0e736a902ec223eaf29212e530d6cb69588832e01c5ddb39d0b863dd',
    clientKeys: ['proxy-client-73121'], // This is a random string, but it must match the clientKey in the Unleash Client configuration
    proxyPort: 3000,
});

app.listen(port, () =>
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);
