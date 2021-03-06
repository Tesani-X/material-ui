import * as React from 'react';
import Box from '@mui/material/Box';

export default function Block() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        block
      </Box>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        block
      </Box>
    </div>
  );
}
