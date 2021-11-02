# Nx Monorepo with Shared Web Components

A Monorepository made with Nx framework and which contains two Angular applications and a library with an agnostic
Web component. This aims to explain why it's better to create [Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements).

## Purpose

When creating a Single Page Application, it tends to grow, technologies evolve and the people that is in charge of developing it or maintaining it changes, this causes 
the page to become more and more difficult to change, update the technologies it has and, in general, to maintain it, that's what we typically call a Monolith.

A solution to these issues could be using Microfrontends, which are independent and isolated End-To-End features or fragments that can be built in any technology independently and that are connected in a single application, for that purpose we need to use agnostic Web Components which don't care about technologies and are easy to reuse and maintain.

## Why Monorepos

Monorepos provide a series of advantages which are:
- Simplify code management.
- Simplify app refactoring.
- Minimize the chances to break something when libraries are modified.

These advantages help a lot with the philosophy of microfrontends and shared web components. 

## Why Nx

Nx is a Framework that helps architect, testing and building applications, it automatizes processes and allows you to build collections of reusable components and standards.
Usually in monorepos each new app added comes at the cost of a slowdown in the continuous integration pipeline, Nx ensures that adding another app doesn't increase the
existing app's tests or build time. 

## The application

This repo contains a sample application of two Single App Applications that share a Web Component.
The Web Component is created in 
[libs](https://github.com/Ptts2/Nx-monorepos/blob/6988ae17224d4b5e8fc8f2d8e90e27466f648421/libs/library/src/lib/styled-link/styled-link.element.ts#L1), 
completely isolated from the other two applications. Then the component is used by both applications (regardless of its framework) importing it and using
just like another HTML tag.

Here we can see the [import of the library](https://github.com/Ptts2/Nx-monorepos/blob/6988ae17224d4b5e8fc8f2d8e90e27466f648421/apps/angular-app/src/main.ts#L1) 
into one of our applications and how [it's used](https://github.com/Ptts2/Nx-monorepos/blob/6988ae17224d4b5e8fc8f2d8e90e27466f648421/apps/angular-app/src/app/app.component.html#L12) inside it.

![Image of how the Web Components seems in the first app](https://i.imgur.com/8E9kHt3.png)

And the exact same thing with the other application [import](https://github.com/Ptts2/Nx-monorepos/blob/6988ae17224d4b5e8fc8f2d8e90e27466f648421/apps/angular-app2/src/main.ts#L1) and how it's [used](https://github.com/Ptts2/Nx-monorepos/blob/6988ae17224d4b5e8fc8f2d8e90e27466f648421/apps/angular-app2/src/app/app.component.html#L1)

![Image of how the Web Components seems in the second app](https://i.imgur.com/BPXWYOl.png)

## Try it

### Dependencies
- [Node.js and npm](https://nodejs.org)

- [Angular](https://angular.io/guide/setup-local#install-the-angular-cli)

- [Nx](https://nx.dev/l/a/getting-started/nx-setup#install-nx)


### From scratch

#### Create an empty Nx workspace:
    npx create-nx-workspace@latest nx-webcomp-shared --preset=angular
#### Create another Angular app (or a react one):
    npx nx g @nrwl/angular:app angular-app
#### Create a library for Web Components:
    npx nx g @nrwl/workspace:lib lib
    
In the library you can create the web component you want, then import it to the Angular Applications.

### With this repo

Clone this repo in any folder, then:
### 
    npm install
    
#### Try the app
    npx nx serve angular-app --open
