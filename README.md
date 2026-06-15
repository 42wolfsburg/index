# index

Index webpage to help students+staff navigate through all services.

## HOWTO

First you must have Node.JS in your computer, you can find a guide for installation [here](https://nodejs.org/en/download/). After that, you can run the following command for a local preview:
```bash
npm run dev
```
If you wish to properly deploy, you can use the build command:
```bash
npm run build
```
The result of this command will be a `dist` directory in your project directory which will contain the files you will use to properly deploy.

If you don't have the infrastructure, or you're unsure where to deploy, an easy go to is Vercel and Railway.

## How can I add more references in the index?

All references are read from the `Content.js` file. If you need to add a new reference to your new service, you can either add it to the `items`, or `items_staff` variable depending if it's intended for students or staff. After that the code will display your new reference, but you will still need to run `npm run build` all over again.

## Questions? How can I contribute?

You are free to fork and if you want to make a PR, you can contact any 42 Wolfsburg tech staff.
