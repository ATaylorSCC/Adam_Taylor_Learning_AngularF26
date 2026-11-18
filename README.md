# AdamTaylorLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## API

This project uses PokéAPI to retrieve Pokémon information.

API Documentation:
https://pokeapi.co/docs/v2

Example Request:
https://pokeapi.co/api/v2/pokemon/pikachu

The API returns JSON data containing Pokémon information
such as names, types, IDs, and sprites.

AOI Implementation

I chose option A to retrieve pokemon data. The retrieved data is stored in
a writable signal, which allows the ability to add edit and delete.

Local Data Changes
the application retrieves the data from the pokemon api, adjusting these
values only reflects the local writable signal, not the api itself. When 
the page is refreshed the api is recalled and the original data is back.

Before Lazy Loading

|Initial chunk files | Names         |  Raw size | Estimated transfer size|
|--------------------|---------------|-----------|------------------------|
|main-MIQXXZ3H.js    | main          | 304.76 kB |                80.78 kB|
|styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes|

Initial total 304.76 kB | 80.78 kB

[3.088 seconds]

After Lazy Loading

| chunk files | Names          |  Raw size | Estimated transfer size|
|-------------|----------------|-----------|------------------------|
|chunk-W3EZB7K6.js   | -              | 157.35 kB |                46.20 kB|
|chunk-WAHK6JGJ.js   | -              |  86.13 kB |                21.80 kB|
|chunk-P3NJX2KB.js   | -              |  16.48 kB |                 5.03 kB|
|main-4JUSMY3B.js    | main           |   3.21 kB |                 1.26 kB|
|styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes|

Initial total 263.17 kB | 74.30 kB

[1.666 seconds]

|Lazy chunk files    | Names          |  Raw size | Estimated transfer size|
|--------------------|----------------|-----------|------------------------|
|chunk-R7O3MNB5.js   | pokemon-form   |  36.75 kB |                 8.36 kB|
|chunk-RJTXKAK4.js   | pokemon-list   |   4.64 kB |                 1.65 kB|
|chunk-LSVFWVEJ.js   | -              |   2.54 kB |               855 bytes|
|chunk-EYXD4AGJ.js   | pokemon-detail | 920 bytes |               920 bytes|

We can see that after implementing lazy loading, the build time is almost cut in half, and the intial bundle size is decreased

LifeCycle

with this.id() it returns undefined because there was no input value yet. in NgOnInit() the pokemon id input value is assigned on initialization

ngOnDestroy() runs when i leave the details page. This is because it no longer can find the component. 
