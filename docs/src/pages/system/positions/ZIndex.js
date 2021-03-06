import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ZIndex() {
  return (
    <Typography
      component="div"
      variant="body1"
      style={{
        height: 100,
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          bgcolor: 'grey.700',
          color: 'white',
          p: 2,
          position: 'absolute',
          top: 40,
          left: '40%',
          zIndex: 'tooltip',
        }}
      >
        z-index tooltip
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          color: 'text.primary',
          p: 2,
          position: 'absolute',
          top: 0,
          left: '43%',
          zIndex: 'modal',
        }}
      >
        z-index modal
      </Box>
    </Typography>
  );
}
