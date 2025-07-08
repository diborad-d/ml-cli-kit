# featurize

A CLI and library for extracting structured features from user activity sentences, e.g. `"User clicked the ad 3 times"` → `{ action: "clicked", object: "ad", count: 3 }`.

---

### Installation

#### As a CLI (Recommended for local development)

1. **Navigate to the package directory:**

   ```sh
   cd packages/featurize
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Link the CLI globally:**
   ```sh
   npm link
   ```
   This makes the `featurize` command available globally on your system.

---

## Usage

### CLI

```sh
featurize 'User clicked the ad 3 times'
```

**Example Output:**

```json
Output object: { action: 'clicked', object: 'ad', count: 3 }
{
  "action": "clicked",
  "object": "ad",
  "count": 3
}
```

You can pass any sentence. If the sentence matches the expected pattern, it will extract features; otherwise, it will return `null` values.

### As a Library

```js
import { featurizeText } from "./bin/featurize.js";

const features = featurizeText("User clicked the ad 3 times");
console.log(features);
// { action: "clicked", object: "ad", count: 3 }
```

---

## Development & Testing

### Run Tests

From the `featurize` directory:

```sh
npm test
```

or, for a specific file:

```sh
npm test -- __tests__/featurize.test.js
```

---

## Troubleshooting

### No Output When Running `featurize ...`

- Ensure you have run `npm link` in the `featurize` directory.
- Make sure your `package.json` includes:
  ```json
  "bin": {
    "featurize": "./bin/featurize.js"
  }
  ```
- Ensure the file is executable:
  ```sh
  chmod +x ./bin/featurize.js
  ```
- Try running directly:
  ```sh
  node ./bin/featurize.js 'User clicked the ad 3 times'
  ```
  If this works but `featurize` does not, try re-linking:
  ```sh
  npm unlink -g featurize
  npm link
  ```

### SyntaxError: Cannot use import statement outside a module

- Make sure your `package.json` contains `"type": "module"`.
- Always run tests with `npm test` or `npx jest`, not with `node` directly.

### ESLint: 'console' is not defined

- Add Node.js globals to your ESLint config:
  ```js
  import nodeGlobals from "globals";
  languageOptions: {
    globals: {
      ...nodeGlobals.node,
    },
  },
  ```

---

## Uninstall

To remove the global CLI:

```sh
npm unlink -g featurize
```

---

## Contributing

- Please open issues or pull requests for bugs and improvements.
- Run tests before submitting changes.

---

````# featurize

A CLI and library for extracting structured features from user activity sentences, e.g. `"User clicked the ad 3 times"` → `{ action: "clicked", object: "ad", count: 3 }`.

---

## Installation

### As a CLI (Recommended for local development)

1. **Navigate to the package directory:**
   ```sh
   cd packages/featurize
````

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Link the CLI globally:**
   ```sh
   npm link
   ```
   This makes the `featurize` command available globally on your system.

---

## Usage

### CLI

```sh
featurize 'User clicked the ad 3 times'
```

**Example Output:**

```json
Output object: { action: 'clicked', object: 'ad', count: 3 }
{
  "action": "clicked",
  "object": "ad",
  "count": 3
}
```

You can pass any sentence. If the sentence matches the expected pattern, it will extract features; otherwise, it will return `null` values.

### As a Library

```js
import { featurizeText } from "./bin/featurize.js";

const features = featurizeText("User clicked the ad 3 times");
console.log(features);
// { action: "clicked", object: "ad", count: 3 }
```

---

## Development & Testing

### Run Tests

From the `featurize` directory:

```sh
npm test
```

or, for a specific file:

```sh
npm test -- __tests__/featurize.test.js
```

---

## Troubleshooting

### No Output When Running `featurize ...`

- Ensure you have run `npm link` in the `featurize` directory.
- Make sure your `package.json` includes:
  ```json
  "bin": {
    "featurize": "./bin/featurize.js"
  }
  ```
- Ensure the file is executable:
  ```sh
  chmod +x ./bin/featurize.js
  ```
- Try running directly:
  ```sh
  node ./bin/featurize.js 'User clicked the ad 3 times'
  ```
  If this works but `featurize` does not, try re-linking:
  ```sh
  npm unlink -g featurize
  npm link
  ```

### SyntaxError: Cannot use import statement outside a module

- Make sure your `package.json` contains `"type": "module"`.
- Always run tests with `npm test` or `npx jest`, not with `node` directly.

### ESLint: 'console' is not defined

- Add Node.js globals to your ESLint config:
  ```js
  import nodeGlobals from "globals";
  languageOptions: {
    globals: {
      ...nodeGlobals.node,
    },
  },
  ```

---

## Uninstall

To remove the global CLI:

```sh
npm unlink -g featurize
```

---

## Contributing

- Please open issues or pull requests for bugs and improvements.
- Run tests before submitting changes.

---
