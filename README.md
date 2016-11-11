# HeroTutorial

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

# How to get started
See also: https://wikiinline.scania.com/wiki/How_to_set_up_a_Angular2_project_from_scratch if you want to see how to set up a hello world project yourself

# Prequesites:

- Install npm => https://nodejs.org/en/download/ 
To check if you have installed npm on your computer, run npm -v in the command line

# Proxy setup if you sit behind a proxy
Run the following two commands in Powershell:

    setx https_proxy http://<ask for proxy>

    setx http_proxy http://<ask for proxy>
    
    !Important: For this changes to take effect you will have to restart your powershell window

# 1. setup:
### 1.1 npm install -g webpack angular-cli tslint typescript
### 1.2 Get project from https://github.com/schwamster/heroTutorial (Clone or Download)
### 1.3 Download visual studio code: https://code.visualstudio.com/download
### 1.4 Update Chrome: to do that download an chrome installer manually: https://www.google.com/chrome/browser/desktop/index.html
  - Close all Chrome instances in the task manager
### 1.5 Open Visual Studio Code
### 1.7 Go to extentions and add:
  - Debugger for Chrome (Microsoft): https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
  - Typescript Lint (egamma): https://marketplace.visualstudio.com/items?itemName=eg2.tslint
  - Enable Exctensions and restart Visual Studio Code

### 1.8 Install all necessary node modules (this will take a while):
  Either:

      in VSC: Ctrl+P: task npm install 
  or:

      In Powershell (project dir): npm install

# 2. run
### 2.1 After that is done you can just press F5 and debug the application.
  - The first time you do that after restarting VSC this will not start the browser, because the application needs
to be "served" first and this takes to long for the debugger (timeout). Just press F5 again when you see the following in Output:
...webpack: bundle is now Valid

### 2.2 This should start Chrome and you should end up hitting a breakpoint, which is an uncaught exception - untick Uncaught Exceptions in the Breakpoints list in the Debug Window.

### 2.3 Verify that the application is up and running by navigation to http://localhost

# Optional

## Testing
to run unittests open powershell in the projects root folder and run:

    ng test

to run End-2-End test open powershell in the projects root folder and run:   (For this to work the server has to be running (F5))
    
    ng e2e

## More Plugins
- Typescript/Html Angular Snippets: https://marketplace.visualstudio.com/items?itemName=danwahlin.angular2-snippets
- Autoclose html tag: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
- Typescript Toolbox: https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter
