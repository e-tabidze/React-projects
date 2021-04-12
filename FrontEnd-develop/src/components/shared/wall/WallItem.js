import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../Card'
import Button from '../../Button'
import Square from '../../Square'

const WallItem = ({ children, bg, icon, title, buttonLabel }) => {
  return (
    <div className='xl:w-1/3 lg:w-2/4 md:w-2/4 sm:w-full p-3'>
      <Card width='w-full' height='h-80' padding='p-5' bg={bg}>
        <div className='relative h-full'>
          <Square size='14'>{icon}</Square>
          <div className='h-'>
            <div className='text-lg text-white font-bold py-2 mt-2'>
              {title}
            </div>
            <div className='text-sm text-white '>{children}</div>
          </div>
          <div className='absolute bottom-0 left-0 '>
            <Button bold>{buttonLabel}</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

WallItem.propTypes = {
  bg: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  buttonLabel: PropTypes.string
}

WallItem.defaultProps = {
  bg: '',
  icon: '',
  title: '',
  buttonLabel: 'Go there now'
}


export default WallItem
