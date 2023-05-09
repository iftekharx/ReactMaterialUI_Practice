import { Box, Stack, Divider } from '@mui/material'

const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          width: '100px',
          height: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        Codeevlution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="error.main"
        p={2}
      ></Box>
    </Stack>
  )
}

export default MuiLayout
