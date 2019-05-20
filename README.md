TypeScript Cypress Overwrite "visit" "onBeforeLoad" Issue Demo
==============================================================

If we override `visit`, the `onBeforeLoad` lifecycle method still not be called in some cases.

See:
- ./cypress/support/commands.ts
- ./cypress/integration/hello_spec.ts

```
npm install

npm run test:open
```
