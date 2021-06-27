import { Component } from 'react'
import { request,gql } from 'graphql-request'
import { Switch,Route,withRouter } from 'react-router-dom'
import styles from './Styles'
import AFList from '../CityList/AFList'
import ANList from '../CityList/ANList'
import ASList from '../CityList/ASList'
import EUList from '../CityList/EUList'
import NAList from '../CityList/NAList'
import OCList from '../CityList/OCList'
import SAList from '../CityList/SAList'
import Loading from '../Loading/Loading'

const { Container } = styles

class WorkII extends Component {
    constructor(props){
        super(props)
        this.state = {
            cityData:[],
            loadingState:false
        }
    }
    render(){
        let { state:{ cityData,loadingState } } = this
        return(
            <Container>
                { cityData.length !== 0 && <div className="top">
                    <div className="table-outer">
                        <table className="top-list">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Num of Countries</th>
                                </tr>
                            </thead>
                            <tbody>
                                { cityData.map(({ code,name,countries },index) => (
                                    <tr key={ index }>
                                        <td>{ code }</td>
                                        <td>
                                            <span style={{ display:"block" }} onClick={ this.findCity.bind(this,code) }>{ name }</span>
                                        </td>
                                        <td>{ countries.length }</td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                    <Switch>
                        <Route exact path="/test_work/workII/AF" component={ AFList } />
                        <Route exact path="/test_work/workII/AN" component={ ANList } />
                        <Route exact path="/test_work/workII/AS" component={ ASList } />
                        <Route exact path="/test_work/workII/EU" component={ EUList } />
                        <Route exact path="/test_work/workII/NA" component={ NAList } />
                        <Route exact path="/test_work/workII/OC" component={ OCList } />
                        <Route exact path="/test_work/workII/SA" component={ SAList } />
                    </Switch>
                </div>}
                <Loading haveLoading={ loadingState }/>
            </Container>
        )
    }
    componentDidMount(){
        setTimeout(()=> this.getData(),200)
    }
    componentWillUnmount() {
        this.setState = ()=>false;
    }
    findCity(val){
        this.props.history.push({
            pathname:`/test_work/workII/${val}`,
            state:{
                postVal:val
            }
        })
    }
    getData(){
        let query = gql`
        {
            continents(filter: { code: { in: ["AF", "AN","AS","EU","NA","OC","SA"] } }) {
                code
                name
                countries {
                    code
                    name
                    native
                    capital
                    currency
                    languages {
                    name
                    }
                }
            }
        }
        `
        this.setState({ loadingState:true })
        request("https://countries.trevorblades.com/",query).then(({ continents }) => {
            this.setState({ 
                cityData:continents,
                loadingState:false
            })
        })
    }
}

export default withRouter(WorkII)