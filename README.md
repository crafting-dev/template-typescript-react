# Typescript React template for Cloud Sandbox

This is a template React app, written in Typescript, and bootstrapped with [`create-react-app`](https://create-react-app.dev/), for quick front-end development startup in Cloud Sandbox.

## Specifications

The following `App Configuration` was used when creating this template:

```yaml
spec:
  endpoints:
  - http:
      routes:
      - backend:
          port: web
          target: ts-react
        path_prefix: /
    name: app
  services:
  - description: Typescript/React template
    name: ts-react
    workspace:
      checkouts:
      - path: template-typescript-react
        repo:
          git: https://github.com/crafting-dev/template-typescript-react.git
      packages:
      - name: nodejs
        version: ~16
      ports:
      - name: web
        port: 3000
        protocol: HTTP/TCP
```