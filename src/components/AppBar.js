import { useSelector } from 'react-redux';
import { Navigation} from './Navigation/Navigation';
import { UserMenu} from './UserMenu/UserMenu.jsx';
import AuthNav from './AuthNav/AuthNav.jsx';
import { authSelectors } from '../redux/auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBarUI = () => {
  const classes = useStyles();
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} sx={{ flexGrow: 1 }}>
            <Navigation /> 
          </Typography>
           {isLoggedIn ? <Typography variant="h6" className={classes.title}>
             <UserMenu /> 
          </Typography> : <Typography variant="h6" className={classes.title}>
            <AuthNav />
          </Typography>}
        </Toolbar>
      </AppBar>
    </div>
  );

}
