module.exports = {
  input: [
    "src/**/*.{js,jsx,ts,tsx}", // Indique où scanner les fichiers
    "!src/**/*.test.{js,jsx,ts,tsx}", // Ignore les fichiers de tests
  ],
  output: "./locales/", // Le chemin où les fichiers de traduction seront générés
  options: {
    debug: true,
    sort: true,
    removeUnusedKeys: true, // Supprime les clés non utilisées dans le fichier de sortie
    func: {
      list: ["i18next.t", "t"], // Méthodes utilisées pour les traductions
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    lngs: ["fr", "en"], // Langues que tu veux supporter
    ns: ["translation"], // Namespace utilisé dans ton projet
    defaultLng: "fr",
    defaultNs: "translation",
    resource: {
      loadPath: "./{{lng}}/{{ns}}.json",
      savePath: "./{{lng}}/{{ns}}.json",
    },
    keySeparator: false, // Pour désactiver la séparation des clés par des points (ex: 'key.subkey')
    nsSeparator: false, // Désactive la séparation de namespace
  },
};
