module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
};
  