
import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login_Page from './components/Login/Login_Page';
import Signup_page from './components/Signup/Signup_page';
import Forget_pass from './components/Forget_password/Forget_pass';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Donor_Create from './components/Donor_Create/Donor_Create';
import Contact_details from './components/Donor_Create/Contact_details';
import Other_details from './components/Donor_Create/Other_details';
import Donor_list from './components/Donor_List/Donor_list';
import Donor_search from './components/Donor_List/Donor_search';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login_Page}/>
            <Route exact path="/Signup/Signup_page" component={Signup_page} />
             <Route exact path="/Forget_password/Forget_pass" component={Forget_pass} />
              <Route exact path="/Navbar/Navbar" component={Navbar}/>
             <Route exact path="/Dashboard/Dashboard" component={Dashboard}/>
             <Route exact path="/Donor_Create/Donor_Create" component={Donor_Create}/>
             <Route exact path="/Donor_Create/Contact_details" component={Contact_details}/>
             <Route exact path="/Donor_Create/Other_details" component={Other_details}/>
             <Route exact path="/Donor_List/Donor_list" component={Donor_list}/>
             <Route exact path="/Donor_List/Donor_search" component={Donor_search}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
