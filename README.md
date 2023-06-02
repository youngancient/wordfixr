
## Solution

<h1 align="center">
  WordFixr
</h1>

<p align="center">
  <a href="https://wordfixr.netlify.app/">
    Live Preview
  </a>
</p>

## Project Explained
This is a really simple project which helps filter duplicates characters but in a different way.
The usual way is to delete all duplicate instances of the characters having duplicates, but my approach is different.
My approach is gives the user the ability to remove characters by clicking on the character. When the character is clicked,
the program removes all duplicates of the selected character leaving it behind as the only existing character. 
Once all the characters have no duplicates, there's a fancy popup alert.
Also note that all duplicates characters have the same card color and the uppercase and lowercase of a character are treated as same.

## Folder Structure
No configuration or complicated folder structures, just the files you need to build your app:

```
Wordfixr
├── node_modules
├── public
│   ├── favicon.svg
│   └── assets
      ├── images,svgs
└── src
    ├── Components
       ├── All-components
    ├── Utils
        ├── Context
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/youngancient/wordfixr.git

cd wordfixr
```

Install dependencies: You can use npm, but I am a fan of yarn!

```
yarn
```

Now, you can start a local web server by running:

```
yarn dev
```

And then open http://localhost:5173/ to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn dev   | Runs the app in the development mode.               |
| yarn run build | Builds the app for production to the `dist` folder. |
| yarn run preview | Serves the production build from the `dist` folder. |

#### Solution Details
> Click to preview live : <a href="https://wordfixr.netlify.app/">WordFixr</a>
> I created a vite-powered react app and made a webapp that satisfies the following:
1. In Screen one, users are prompted to enter the text in the form according to the specified validation rules.
2. Once the validation rules are obeyed, the user is redirected to screen2
3. In screen two, the characters in the input entered earlier are looped over and presented as cards each having a delete symbol. If the letter has no duplicate, the delete icon appears disabled and if duplicate exists, it appears active. Each character card has different background colors, which duplicates have the same.
4. The user clicks on the delete icon of a character to delete all other existing duplicates exist the exact clicked character.
5. When there are no duplicates left, the success header appears.
6. When the user clicks go back, the form input field is empty and they can fill in again!

