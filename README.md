TypeScript Cypress Overwrite "visit" "onBeforeLoad" Issue Demo
==============================================================

If we override `visit`, the `onBeforeLoad` lifecycle method still not be called in some cases.

See:
- ./cypress/support/commands.ts
- ./cypress/integration/hello_spec.ts

Fixed:

When override the 'visit' method, we should return the value of original function.

It's an typing issue:

```
overwrite(name: string, fn: (...args: any[]) => void): void
```

the `fn` should not have `void` return type.

```
npm install

npm run test:open
```
