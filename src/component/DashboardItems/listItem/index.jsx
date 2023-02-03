import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import ArticleIcon from '@mui/icons-material/Article';
import HistoryIcon from '@mui/icons-material/History';

  const  MainListItems = (props)=>{return (<React.Fragment>
    
    <ListItemButton title="hamed">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" onClick={(e)=>props.fct(e)}/>
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <QuizIcon />
      </ListItemIcon>
      <ListItemText primary="Predictions" onClick={(e)=>props.fct(e)}/>
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Articles" onClick={(e)=>props.fct(e)}/>
    </ListItemButton>
  
    
  </React.Fragment>
)};export default MainListItems;
  

