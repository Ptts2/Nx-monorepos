# Nx Monorepo with Shared Web Components

A Monorepository made with Nx framework and which cointains two Angular applications and a library with an agnostic
Webcomponent. This aims to explain why it's better to create [Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements).

## Purpose

When creating a Single Page Application it tends to grow, technologies evolve and the people that is in charge of developing it or maintaining it changes, this causes 
the page to become more and more difficult to change, update the technologies it has and, in general, to maintain it, that's what we usually call a Monolith.

A solution to this issues could be ussing Microfrontends, which are independent and isolated End-To-End features or fragments that can be built in any technology independently and that are joined in a single application, for that purpose we need to use agnostic Web Components which don't care about technologies and are easy to reuse and to maintain.

## Why Monorepo

Monorepo provides a series of advantages which are:
- Simplifies code management
- Simplifies app refactoring
- Minimizes the chances to break something when libraries are modified

This advantages helps a lot with the philosophy of microfrontends and shared webcomponents. 

## Why Nx

Nx is a Framework that helps architecting, testing and building applications, it automatizes processes and allows you to build collections of reusable components and standards.
Usually in monorepos each new app added comes at the cost of a slowdown in the continuous integration pipeline, Nx ensures that adding another app doesn't increase the
existing app's tests or build time. 

## The application

This repo contains a sample application of two Single App Applications that share a Web Component.

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
    
In the library you can create the webcomponent you want then import it to the Angular Applications.

### With this repo

Clone this repo in any folder, then:
### 
    npm install
    
#### Try the app
    npx nx serve angular-app --open