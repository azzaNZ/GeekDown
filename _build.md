**Build**

    npm install @milkdown/crepe @milkdown/plugin-upload marked electron electron-builder vite --save-dev
    

To test

In one terminal window, run

    npx vite
    

In a new terminal window/tab/pane, run

    npm run electron:dev
    

To build

    npm run electron:build
    

Your binary will be in the electron-dist directory. Enjoy!