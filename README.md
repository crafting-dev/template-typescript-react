# Typescript/React template for Crafting Sandbox

This is a Typescript/[React](https://reactjs.org/) template, configured for quick development setup in [Crafting Sandbox](https://crafting.readme.io/docs).

## Specifications

This template contains a single [`Ping`](src/Ping.tsx) component:

```js
<React.StrictMode>
  <Ping />
</React.StrictMode>
```

This component consists of a form with a single input and a button.

Once form is submitted, a GET request is made to some backend server that exposes a `/ping` api. This Ping component then renders the api response data.

```js
<code>
  {JSON.stringify(
    {
      ping: pong.ping,
      received_at: new Date(pong.received_at).toLocaleString(),
    },
    null,
    2
  )}
</code>
```

To run the app, you can do:

```bash
PORT=3001 npm start
```

## App Configuration

The following [App Configuration](https://crafting.readme.io/docs/app-spec) was used to create this template:

```yaml
endpoints:
- http:
  routes:
  - backend:
      port: http
      target: ts-react
    path_prefix: /
name: app
services:
- description: Typescript/React template
name: ts-react
workspace:
  checkouts:
  - path: src/template-typescript-react
    repo:
      git: https://github.com/crafting-dev/template-typescript-react.git
  packages:
  - name: nodejs
    version: ~16
  ports:
  - name: http
    port: 3001
    protocol: HTTP/TCP
```
