import * as React from 'react';
import Box from '@mui/material/Box';

export default function Inline() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="div"
        sx={{
          display: 'inline',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        inline
      </Box>
      <Box
        component="div"
        sx={{
          display: 'inline',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        inline
      </Box>
    </div>
  );
}
