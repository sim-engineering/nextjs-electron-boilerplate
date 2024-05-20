# NextJS Electron Boilerplate for native apps - iOS, Win, Lin

This repo serves as a starting point of building a NextJS React + TailwindCSS app that can be exported to a native executable for iOS, Win or Linux using Electron.

Here's the example app:
https://nextjs-electron-boilerplate.netlify.app/

## Featured technologies:
[NextJS](https://nextjs.org/)
[Electron](https://www.electronjs.org/)
[Nextron](https://github.com/saltyshiomix/nextron)
[TailwindCSS](https://tailwindcss.com/)
[Framer](https://www.framer.com/motion/)
[Aceternity](https://ui.aceternity.com/components/aurora-background)
[Netlify NextJS Plugin](https://www.npmjs.com/package/@netlify/plugin-nextjs)

## How to setup
1. `git clone https://github.com/sim-engineering/nextjs-electron-boilerplate`<br>
2. `yarn`<br>
3. `npm install electron-builder -g`<br>

### Dev:
`yarn dev`<br>

### Build (use this build command in netlify settings if needed):
`yarn build-prod`

### Export as a native Electron App:
`electron-builder --linux`

## Additional instructions:

There are two ways we can configure the electron App: 

#### Method One - deploy your app to [Netlify](https://app.netlify.com/) and prepare an executable which requires an internet connection to obtain app resources from netlify. 
Update next.config.js baseUrl const
`const baseUrl = "https://your-netlify-domain.netlify.app";`


#### Method Two - build app localy
Update next.config.js baseUrl const 
`const baseUrl = "";` </br>  </br>
Not going to lie but you might have to examine the build file if the Electron app is not rendering your components. just see where the resources are pointing too - should be root of dir. Just open the out folder created after yarn `prod-build` and update the index.html

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes. <br>For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
