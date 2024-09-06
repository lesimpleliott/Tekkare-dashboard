module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true }, // Ajoute 'node: true' pour reconnaître les modules Node.js
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-undef": "off", // Désactive l'erreur dans le fichier i18next-scanner.config.cjs 'module is not defined'
  },
};
