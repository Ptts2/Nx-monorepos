### Multirepos: 

Storing code in multiple repos

PROS:
- Independent versioning on library (no new versioning when no modified)
- Faster release cycle
- Better access control definition
- Teams can work with autonomy

CONS:
- Libraries can become out of sync with others if their release cycle differ.
- Fragment teams (creating own subcultures)

### Monorepos: 

Storing everything in 1 repo 

PROS:
- Simplifies accessing to code since its first setup is easy
- Simplifies code management
- Simplifies app refactoring
- Minimizes the chances to break something when libraries are modified
- Easier to share the development culture

CONS:
- Slower development cycles
- It requires to download the whole codebase
- Unmodified libraries will be released with a new version number even though they haven't been modified
- Hard to fork

Example of [mono](https://github.com/WordPress/gutenberg)

Example of [multi](https://github.com/WordPress/openverse/blob/918b7cf1b6323291ab16c1ad5a27f3733709ec17/README.md#openverse)


### Nx:

Framework that helps you architect, test and build. It automatizes processes, it allows you to build design systems, collections of reusable components and standards, also it generates tests. Working in a Nx Workspace provides local computation caching, keeping track of files that change, also it has free distributed computation caching, allowing anyone to reuse outputs from each other's commands instead redoing the work.


### What Nx has to offer monorepos:

Usually in monorepos each new app added comes at the cost of a slowdown in the continuous integration pipeline. Nx ensures that adding another app doesn't increasing the existing app's tests or build time.

### Why Nx:

Code collocation is not enough for a monorepo to be "monorepo" it needs adequate tooling, nx provides monorepo without the problems of code collocation.

### Nx allows to scale your monorepo with:

- Consistent command execution
- Consistent code generation
- Nx only runs tasks on affected projects by the source code changes
- Distributed Caching

Also Nx provides:

- Control on code sharing, not allowing everybody to change every project
- Generates up-to-date architecture diagrams since Nx understands the code.

In summary Nx provides a way to improve the monorepos without having to worry of  the problems that arise when we implement a monorepo with code collocation. 
