const { RuntimeGlobals } = require('webpack')

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
      },
    },
    fontFamily: {
      sans: ['Open Sans, sans-serif'],
    },
    extend: {
      width: {
        520: '520px',
        985: '985px',
      },
      height: {
        580: '580px',
      },
      colors: {
        blue: {
          light: '#85d7ff',
          DEFAULT: '#023F88',
          dark: '#009eeb',
          hover: '#0451ad',
          white: '#ffffff'
        },
        wall: {
          blue: '#39A7E1',
          green: '#BFD730',
          pink: '#EE4D9B',
          tealish: '#5BC4BE',
          orange: '#F58220',
        },
        cleanbg: {
          light: '#edf4fd',
        },
        navsquare: {
          wall: '#FFFFFF',
          learn: '#E8F3FC',
          qualities: '#F6F9E0',
          hub: '#FDE7F1',
          groups: '#E7F6F5',
          interviews: '#FEEDDE',
          profile: 'rgba(191,215,48,0.15)',
          progress: '#FFF7DA',
        },
        tblack: {
          elight: 'rgba(126,130,133,0.5)',
          light: '#7E8285',
          DEFAULT: '#27292C',
          dark: '#222',
        },
        igray: {
          light: '#EDF4FD',
          DEFAULT: '#EFEFF4',
          focus: '#ececf1',
          dark: '#dfdfe6',
        },
        auth: {
          pink: '#fde8f2',
          secpink: '#E856A6',
          fielderror: '#F58220',
          resetbg: '#ee4d9b',
        },
      },
    },
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.md'),
          backgroundColor: theme('colors.igray.DEFAULT'),
          '&:focus': {
            backgroundColor: theme('colors.igray.focus'),
          },
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.default'),
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
