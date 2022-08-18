import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



// Submenu Components

import Counter from '../SubMenuContents/Counter'
import Form from '../SubMenuContents/Form'
import List from '../SubMenuContents/List'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
      className={"submenu-box"}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Counter" {...a11yProps(0)} />
        <Tab label="Form" {...a11yProps(1)} />
        <Tab label="List" {...a11yProps(2)} />

      </Tabs>
      <TabPanel class="custom-tabpanel" value={value} index={0}>
        <Counter/>
      </TabPanel>
      <TabPanel class="custom-tabpanel" value={value} index={1}>
        <Form/>
      </TabPanel>
      <TabPanel class="custom-tabpanel" value={value} index={2}>
        <List/>
      </TabPanel>
    </Box>
  );
}
