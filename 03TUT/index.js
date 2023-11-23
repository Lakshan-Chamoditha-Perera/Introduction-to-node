console.log('testing')
//nodemon
//npm i -g nodemon
//nodemon index.js
//nodemon --inspect index.js

//what is nodemon ?
/*
  nodemon is a tool that helps develop node.
  js based applications by automatically restarting the node application when file changes in the directory are detected.
*/
/*nodemon is starting when input nodemon. it usually looks index.js if file name is not index.js we have to specify it as nodemon [sample.js]*/
//nodemon is a dev dependency

//what is npm ?
/*
  npm is the package manager for the Node JavaScript platform.
  It puts modules in place so that node can find them, and manages dependency conflicts intelligently.
  It is extremely configurable to support a wide variety of use cases.
  Most commonly, it is used to publish, discover, install, and develop node programs.
*/

//what is package.json ?
/*
  This is the file which npm reads for identify what are the installation dependencies for the project
  package.json is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project's dependencies.
  It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package.
*/

//what is package-lock.json ?
/*
  package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json.
  It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
  This file is intended to be committed into source repositories, and serves various purposes:
  Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.
  Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.
  To facilitate greater visibility of tree changes through readable source control diffs.
  And optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.
*/

//npm init
/*
  npm init is a utility that initializes a package.json file for your project.
  It guides you through some steps to create the package.json file and adds the dependencies for your project.
*/