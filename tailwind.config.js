// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Inclua todos os arquivos dentro de src
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar extensões personalizadas, como cores, fontes, espaçamentos, etc.
      colors: {
        customGreen: "#759080", // Exemplo de cor personalizada para uso em `bg-customGreen`
      },
    },
  },
  plugins: [],
};
