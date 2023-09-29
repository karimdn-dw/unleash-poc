// https://docs.getunleash.io/reference/unleash-proxy#configuration-options
export const config = {
    url: 'http://localhost:3000/proxy', // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
    clientKey: 'proxy-client-73121', // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
    refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
    appName: 'web-poc', // The name of your application. It's only used for identifying your application
    environment: 'development', // The environment your application is running in
};
