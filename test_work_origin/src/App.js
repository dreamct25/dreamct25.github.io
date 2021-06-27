import styles from './globalStyle';
import WorkI from './component/WorkI/WorkI';
import WorkII from './component/WorkII/WorkII';
import { Component } from 'react'
import { withRouter,Switch,Route } from 'react-router-dom'

const { Apps } = styles

class App extends Component {
  render(){
    let { pathname } = this.props.history.location
    return (
      <Apps>
        <div className="pages-btns">
          <div className={ pathname ===  "/test_work/workI" ? "pageI active" : "pageI" } onClick={ this.goPage.bind(this,"/test_work/workI") }>WorkI</div>
          <div className={ pathname !==  "/test_work/workI" ? "pageII active" : "pageII" } onClick={ this.goPage.bind(this,"/test_work/workII") }>WorkII</div>
        </div>
        <Switch>
          <Route exact path="/test_work/workI"><WorkI/></Route>
          <Route path="/test_work/workII"><WorkII/></Route>
        </Switch>
      </Apps>
    );
  }
  componentDidMount(){
    this.props.history.push("/test_work/workI")
  }
  goPage(routeName){
    this.props.history.push(routeName)
  }
}

export default withRouter(App);
