module.exports = {
  theme: {
    theme: {
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px"
      }
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "450px" }
    },
    extend: {
      colors: {
        "theme-red": "#ea475c",
        "theme-green": "#0b9a63",
        "theme-lightblue": "#68c4c6",
      }
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
      ]
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
};
