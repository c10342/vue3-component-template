module.exports = {
  "*.{css,scss}": ["stylelint **/*.{css,scss} --fix"],
  "*.{ts,js,.vue,tsx,jsx}": ["eslint --fix", "eslint"]
};
