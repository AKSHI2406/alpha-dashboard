import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';
import dummy from 'utils/constants';

// ==============================|| DEFAULT - UNIQUE VISITOR ||============================== //

export default function UniqueVisitorCard() {
  // const [slot, setSlot] = useState('week');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClick = (id) => {
    setSelectedItemId(id);
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Ongoing Delivery</Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" alignItems="center" spacing={0}>
            {/* <Button
              size="small"
              onClick={() => setSlot('month')}
              color={slot === 'month' ? 'primary' : 'secondary'}
              variant={slot === 'month' ? 'outlined' : 'text'}
            >
              Month
            </Button>
            <Button
              size="small"
              onClick={() => setSlot('week')}
              color={slot === 'week' ? 'primary' : 'secondary'}
              variant={slot === 'week' ? 'outlined' : 'text'}
            >
              Week
            </Button> */}
          </Stack>
        </Grid>
      </Grid>
      <MainCard content={false} sx={{ mt: 1.5 }}>
        <Box sx={{ pt: 1, pr: 2 }}>
          <div>
            {dummy.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                  // backgroundColor: item.id === selectedItemId ? '#cce5ff' : '#fff',
                  border: item.id === selectedItemId ? '2px solid #096dd9' : '2px solid #fff',
                  borderRadius: '12px',
                  marginBottom: '5px'
                }}
              >
                <p>{item.title}</p>
                <p>{item.id}</p>
                <p>{item.address}</p>
              </li>
            ))}
          </div>
          {/* <IncomeAreaChart slot={slot} /> */}
        </Box>
      </MainCard>
    </>
  );
}
