import React from 'react'

export const Bag = ({size}) => (
  <svg  width={size || 20} height={size || 18} viewBox='0 0 20 18' fill='none'>
    <path
      d='M12.5 4.41626C12.04 4.41626 11.6663 4.04251 11.6663 3.58251V2.33251H8.33254V3.58251C8.33254 4.04251 7.95879 4.41626 7.49879 4.41626C7.03879 4.41626 6.66504 4.04251 6.66504 3.58251V2.33251C6.66504 1.41376 7.41254 0.66626 8.33129 0.66626H11.665C12.5838 0.66626 13.3313 1.41376 13.3313 2.33251V3.58251C13.3338 4.04376 12.96 4.41626 12.5 4.41626Z'
      fill='#F9B77E'
    />
    <path
      d='M10.5913 11.8163C10.4413 11.875 10.225 11.9163 10 11.9163C9.775 11.9163 9.55875 11.875 9.35875 11.8L0 8.68378V15.0425C0 16.3088 1.025 17.3338 2.29125 17.3338H17.7075C18.9738 17.3338 19.9988 16.3088 19.9988 15.0425V8.68378L10.5913 11.8163Z'
      fill='#F58220'
    />
    <path
      d='M20 5.45876V7.36751L10.2 10.6338C10.1337 10.6588 10.0662 10.6675 10 10.6675C9.93375 10.6675 9.86625 10.6588 9.8 10.6338L0 7.36626V5.45751C0 4.19126 1.025 3.16626 2.29125 3.16626H17.7075C18.975 3.16626 20 4.19126 20 5.45876Z'
      fill='#F58220'
    />
  </svg>
)

export default Bag
