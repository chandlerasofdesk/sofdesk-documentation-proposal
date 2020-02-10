Very early proposal for potential Documentation/Shared component library.

Heavily inspired from Material UI docs. 

## Goal

Create a central repository which can share common components between SG/RG. 

The idea is that both the packages and docs come together, so when we create a component we use the docs as a sandbox which means devs will always have a reference for all components inside the library.

## Set Up
Currently I am just using a local reference to the sofdeskCore package inside the docs `package.json.`

In order to run the docs you must `yarn` in sofdeskCore and then run `yarn build`. Then `yarn` in docs and run `yarn dev`. 

## Issues / Future Considerations

### Authentication
We could use Auth0 (Github) as a first step so only people connected to the Sofdesk organization can access the docs. (I assume this would be possible?)

### Hosting Package
Ideally it could be hosted as a private npm package as at the beginning it will likely be updated very frequently, so it would be annoying to keep updating the commit hash in each project on each update. I'm unsure on the costs that would be involved in this.

### Architecture
This repo is just a starting point and is very basic. Everything should probably be revised.

### Search
https://community.algolia.com/docsearch/run-your-own.html
