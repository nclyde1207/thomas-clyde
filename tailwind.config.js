module.exports = {
  content: ['./src/**/*.{html,js}', './public/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('tailwindcss-skip-link')(), require('tailwindcss-accessibility')],
  daisyui: {
    themes: [
      {
        'TClyde Dark': {
          

 'primary' : '#0080ff',


          

 'primary-focus' : '#005fbd',


          

 'primary-content' : '#ffffff',



          

 'secondary' : '#37cdbe',


          

 'secondary-focus' : '#2ba69a',


          

 'secondary-content' : '#ffffff',



          

 'accent' : '#fad605',


          

 'accent-focus' : '#ceb004',


          

 'accent-content' : '#ffffff',



          

 'neutral' : '#2a2e37',


          

 'neutral-focus' : '#16181d',


          

 'neutral-content' : '#ffffff',



          

 'base-100' : '#3b424e',


          

 'base-200' : '#2a2e37',


          

 'base-300' : '#16181d',


          

 'base-content' : '#ebecf0',



          

 'info' : '#66c7ff',


          

 'success' : '#87cf3a',


          

 'warning' : '#e1d460',


          

 'error' : '#ff6b6b',



          

'--rounded-box': '1rem',          


          

'--rounded-btn': '.5rem',        


          

'--rounded-badge': '1.9rem',      



          

'--animation-btn': '.25s',       


          

'--animation-input': '.2s',       



          

'--btn-text-case': 'uppercase',   


          

'--navbar-padding': '.5rem',      


          

'--border-btn': '1px',            


        },
      },
    ],
  },
}
