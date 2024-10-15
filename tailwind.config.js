/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "var(--primary-lighter)",
          light: "var(--primary-light)",
          DEFAULT: "var(--primary-main)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
          contrastText: "var(--primary-contrastText)",
        },
        secondary: {
          lighter: "var(--secondary-lighter)",
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary-main)",
          dark: "var(--secondary-dark)",
          darker: "var(--secondary-darker)",
          contrastText: "var(--secondary-contrastText)",
        },
        info: {
          lighter: "var(--info-lighter)",
          light: "var(--info-light)",
          DEFAULT: "var(--info-main)",
          dark: "var(--info-dark)",
          darker: "var(--info-darker)",
          contrastText: "var(--info-contrastText)",
        },
        success: {
          lighter: "var(--success-lighter)",
          light: "var(--success-light)",
          DEFAULT: "var(--success-main)",
          dark: "var(--success-dark)",
          darker: "var(--success-darker)",
          contrastText: "var(--success-contrastText)",
        },
        warning: {
          lighter: "var(--warning-lighter)",
          light: "var(--warning-light)",
          DEFAULT: "var(--warning-main)",
          dark: "var(--warning-dark)",
          darker: "var(--warning-darker)",
          contrastText: "var(--warning-contrastText)",
        },
        error: {
          lighter: "var(--error-lighter)",
          light: "var(--error-light)",
          DEFAULT: "var(--error-main)",
          dark: "var(--error-dark)",
          darker: "var(--error-darker)",
          contrastText: "var(--error-contrastText)",
        },
        actions: {
          hover: "var(--action-hover)",
        },
        grey: {
          50: "var(--grey-50)",
          100: "var(--grey-100)",
          200: "var(--grey-200)",
          300: "var(--grey-300)",
          400: "var(--grey-400)",
          500: "var(--grey-500)",
          600: "var(--grey-600)",
          700: "var(--grey-700)",
          800: "var(--grey-800)",
          900: "var(--grey-900)",
        },
        secondary_text: "var(--text-secondary)",
        body_default: "var(--background-default)",
        disabled_text: "var(--text-disabled)",
        black: "var(--common-black)",
        white: "var(--common-white)",
      },
      boxShadow: {
        0: "var(--shadows-0)",
        1: "var(--shadows-1)",
        2: "var(--shadows-2)",
        3: "var(--shadows-3)",
        4: "var(--shadows-4)",
        5: "var(--shadows-5)",
        6: "var(--shadows-6)",
        7: "var(--shadows-7)",
        8: "var(--shadows-8)",
        9: "var(--shadows-9)",
        10: "var(--shadows-10)",
        11: "var(--shadows-11)",
        12: "var(--shadows-12)",
        13: "var(--shadows-13)",
        14: "var(--shadows-14)",
        15: "var(--shadows-15)",
        16: "var(--shadows-16)",
        17: "var(--shadows-17)",
        18: "var(--shadows-18)",
        19: "var(--shadows-19)",
        20: "var(--shadows-20)",
        21: "var(--shadows-21)",
        22: "var(--shadows-22)",
        23: "var(--shadows-23)",
        24: "var(--shadows-24)",
        z1: "var(--shadows-z1)",
        z4: "var(--shadows-z4)",
        z8: "var(--shadows-z8)",
        z12: "var(--shadows-z12)",
        z16: "var(--shadows-z16)",
        z20: "var(--shadows-z20)",
        z24: "var(--shadows-z24)",
      },
      zIndex: {
        mobileStepper: "var(--index-mobileStepper)",
        fab: "var(--index-fab)",
        speedDial: "var(--index-speedDial)",
        appBar: "var(--index-appBar)",
        drawer: "var(--index-drawer)",
        modal: "var(--index-modal)",
        snackbar: "var(--index-snackbar)",
        tooltip: "var(--index-tooltip)",
      },
      height: {
        header_desktop_height: "var(--header-desktop-height)",
      },
      padding: {
        header_desktop_height: "var(--header-desktop-height)",
      },
      borderRadius: {
        shaps: "var(--shape-radius)",
      },
    },
  },
  plugins: [],
};