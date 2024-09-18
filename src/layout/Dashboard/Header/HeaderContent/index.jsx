// material-ui
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
// import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// project import
// import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// project import
// import { GithubOutlined } from '@ant-design/icons';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      {!downLG && <h2 style={{ width: '100%', ml: { xs: 0, md: 1 }, paddingLeft: '16px' }}>Dashboard</h2>}
      {/* {!downLG && <Search />} */}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton> */}

      <AvatarGroup max={3} spacing="small">
        <Avatar alt="Remy Sharp" src="https://github.com/shadcn.png" />
        <Avatar alt="Travis Howard" src="https://github.com/shadcn.png" />
        <Avatar alt="Cindy Baker" src="https://github.com/shadcn.png" />
        <Avatar alt="Agnes Walker" src="https://github.com/shadcn.png" />
        <Avatar alt="Trevor Henderson" src="https://github.com/shadcn.png" />
      </AvatarGroup>

      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <InputLabel id="demo-select-small-label" style={{ paddingTop: '6px' }}>
          Lang
        </InputLabel>
        <Select autoWidth labelId="demo-select-small-label" id="demo-select-small" value={language} label="Lang" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
        </Select>
      </FormControl>

      <Notification />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}
