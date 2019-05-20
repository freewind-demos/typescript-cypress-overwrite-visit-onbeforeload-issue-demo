TypeScript Cypress Overwrite "visit" "onBeforeLoad" Issue Demo
==============================================================

If we override `visit`, the `onBeforeLoad` lifecycle method still won't be run in some cases.

See:
- ./cypress/support/commands.ts
- ./cypress/integration/hello_spec.ts

```
npm install

npm run test:open
```
