import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>

      <Typography variant="h2">h2 Heading</Typography>

      <Typography variant="h3">h3 Heading</Typography>

      <Typography variant="h4" component="h1" gutterBottom>
        {' '}
        {/* bottom margin is gutterBottom */}
        h4 Heading
      </Typography>

      <Typography variant="h5">h5 Heading</Typography>

      <Typography variant="subtitle1">sub title 1</Typography>

      <Typography variant="subtitle2">sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        repellendus natus magnam blanditiis quia possimus enim totam excepturi?
        Veniam vel quisquam ratione cumque consequatur voluptas quod vero
        assumenda quasi deserunt.
      </Typography>
      <br></br>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
        ducimus accusamus consectetur aliquam officia animi voluptate
        repudiandae doloribus illo veritatis, minima iure! Quo atque, eum odio
        recusandae officiis aut temporibus.
      </Typography>
    </div>
  )
}

export default MuiTypography
