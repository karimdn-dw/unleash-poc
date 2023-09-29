const port = 3000;

const { createApp } = require('@unleash/proxy');

const app = createApp({
    unleashUrl: 'https://app.unleash-hosted.com/demo/api/',
    unleashApiToken: 'unleash-dw-poc:development.0e736a902ec223eaf29212e530d6cb69588832e01c5ddb39d0b863dd',
    clientKeys: ['proxy-client-73121'],
    proxyPort: 3000,
});

app.listen(port, () =>
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);
