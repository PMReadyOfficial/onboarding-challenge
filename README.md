# Frontend Mentor - QR code component Challenge

Welcome to PMReady!🎉🎉

This will be your first task in the Software Team. 

You need to create [this Qr component](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H) from frontendmentor using astro, react and tailwind. 

For this Challenge, you are only required to do the Desktop Design, but feel free to do the Mobile Design if you want.

By the end of this task, you will be familier with the tech stack that we use.

## Setup

### Prerequisites

- Node.js - v18.14.1 or higher.
- Text editor - We recommend VS Code with our Official Astro extension.
- Terminal 

### Some really helpful extensions on VS Code


- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) (after installing this, you can type rfc in a .jsx file to get code snippet for a react component)
- [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- GitHub Copilot 

### Steps

1. Download and Extract this [Frontendmentor challenge](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H) to get the design pictures (Alternatively you can use this [drive link](https://drive.google.com/drive/folders/11HQlzJQeb-O_dDO9iWduNayhOo-1_zYI?usp=drive_link) too)

  
2. Open an empty folder in VS Code and Install Astro ([astro docs](https://docs.astro.build/en/install/auto/))
    ```bash
    npm create astro@latest
    ```
    You will be prompted with the following
    1. > Where should we create your new project?
    
        `type ./ and press enter to create the astro project in the current folder`

    2. > How would you like to start your new project?
         ● Include sample files (recommended)
         ○ Use blog template 
         ○ Empty 

        `press enter to choose "Include sample files (recommended)"`
    3. > Install dependencies? (recommended)
         ● Yes  ○ No
        
        `press enter`
    4. > Do you plan to write TypeScript?
         ○ Yes  ● No

        `press right arrow key and then enter to select No`
    5. > Initialize a new git repository? (optional)
         ● Yes  ○ No 

        `press enter to select Yes`
    
    6. You need to add react and tailwind before you start this challenge
       1.  Install react ([astro docs](https://docs.astro.build/en/guides/integrations-guide/react/#installation))
            ```bash
            npx astro add react
            ```
       2.  Install tailwind ([astro docs](https://docs.astro.build/en/guides/integrations-guide/tailwind/#quick-install))
            ```bash
            npx astro add tailwind
            ```
    Now you are all set to start working on this challenge

3. Use `npm run dev` to start the local development server 
   
    <details>
    <summary>Learn more into astro</summary>
    
    You can start learning about how an astro project is structured in the [astro docs here](https://docs.astro.build/en/core-concepts/project-structure/) or by watching [this youtube video](https://www.youtube.com/watch?v=zrPVTf761OI)
   
   - You dont need to learn everything about astro. Knowing how to get around is enough. 
   - That being said, this tutorial will walk you through everything you need to get this challenge done.
    </details>

4. Project structure
   1. All the code is in the *src* folder. Inside *src*, You have *components*, *layouts* and *pages*. 

5. For this challenge, create a new file *Qr.jsx* inside *components* folder. This is where you will create your component.

6. Open *index.astro* file inside *pages* and remove everrthing inside the `<main>` tag and remove the `style` tag too. Also go ahead and remove the `style` 
    <details>
    <summary>index.astro</summary>
    Your index.astro file should look like this.
    
    ```
    ---
    import Layout from '../layouts/Layout.astro';
    import Card from '../components/Card.astro';
    ---

    <Layout title="Welcome to Astro.">
        <main>
            
        </main>
    </Layout>

    ```
    </details>
7. Now import your Qr component by including the line `import Qr from '../components/Qr.jsx';` just below the other imports and add `<Qr />` inside the `main` tag

8. You can now go back to *Qr.jsx* and start working on the component. 
    Here's a boiler plate code to get started.
    ```jsx
    import React from 'react'

    export default function Qr() {
        return (
            <div>Qr</div>
        )
    }
    ```
9. Tailwind is a CSS framework where you use the utility classes to style. 
    - if you are not familier with tailwind CSS, you can learn from this [youtube tutorial](https://www.youtube.com/watch?v=ei20HfTloFE). It goes over the basics of tailwind in the first 15 minutes itself. 

10. You can also refer the Qr component code from this repo.

11. Once you are done with the Qr Component, you can go ahead and upload the repository on your GitHub and the share the repo link. Good luck!

## Congratulations 🥳🥳 

You have sucessfully finished the challenge. You are now ready to tackle next challenged! 
