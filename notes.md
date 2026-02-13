### E2C Instance

- elastic IP address is 3.227.194.2

### Caddy

- Forward Proxy: hides client, used for anonymity and filtering
- Reverse Proxy: hides server, used for load balancing and protection

### HTML

- Use svg to make colored shapes with pure html. Helps to make placeholders and other things.
- Make your homepage index.html because that will be the first page the web looks for. For me make that the login page.
- LiveServer VSCode extension is super useful for showing you what your site looks like and editing in real time.
- You can use a script to deploy files to your remote server which hosts your web application.

### CSS

- Tailwind CSS is nice because it's done inside the HTML and doesn't require bouncing between CSS and HTML files.
- Tailwind only creates CSS files for what you use unlike Bootstrap which requires downloading the whole library

## React Part 1

- Node.js made it possible to run JavaScript on a server not just a browser. (It can power your entire stack)
- You can use `npm install` to redownload node_modules and any dependencies found in package.json.
- The package-lock.json file tracks the version of the package you installed, so when redownloading node_modules it will download the correct versions you used before.
- I want to look into Deno and Bun as potential tools to use instead of Node.js in the future.
- React abstracts HTML and JS into a JSX file. It's converted back using a preprocessor like Vite.

## React Part 2

- console.time and console.timeEnd can be used to output time between the calls.
- Functions are first order objects in JS. Can be declared anywhere and passed as parameters.
- You can use `=>` to declare a function. Ex `a.sort((v1, v2) => v1 - v2);`
- Return keyword is optional if no curly braces after `=>`
- A closure allows a function to continue to reference its creation scope.
- To slice a JS array, use var.slice(1, 3) (left inclusive, right exclusive)
- JS continues to execute after `setTimeout` is called
- `useEffect` hook allows you to represent lifecycle events (ex. run fn after every time component finishes rendering).
- React keeps a table of states for components, that is what determines what gets rendered
- Update states happens asynchonously
- localStorage is an API to access browser's storage, can be used for caching. Use getItem, setItem, removeItem, clear. Must be type number, string or boolean.
