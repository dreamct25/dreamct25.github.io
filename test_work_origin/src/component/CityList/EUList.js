import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql,request } from 'graphql-request'
import Loading from '../Loading/Loading'
import styles from './Styles'

const { Container } = styles

class EUList extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterDatas:[],
            cityDatas:[],
            area:"",
            loadingState:false
        }
    }
    render(){
        let { state:{ area,loadingState,cityDatas } } = this
        return(
            <Container>
                <div className="show-list">
                    { cityDatas.length !== 0 && <div>
                        <span>{ area }</span>
                        <div className="table-outer">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Native</th>
                                        <th>Capital</th>
                                        <th>Currency</th>
                                        <th>Languages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { cityDatas.map(({ code,name,native,capital,currency,languages},index) => (
                                        <tr key={ index }>
                                            <td>{ code }</td>
                                            <td>{ name }</td>
                                            <td>{ native }</td>
                                            <td>{ capital }</td>
                                            <td>{ currency }</td>
                                            <td>{ languages.map(({ name }) => name) }</td>
                                        </tr>)) 
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> }
                    <Loading haveLoading={ loadingState } />
                </div>
            </Container>
        )
    }
    componentDidMount(){
        setTimeout(()=> this.filterData(this.props.location.state.postVal),200)
    }
    filterData(val){
        let query = gql`
        {
            continents(filter: { code: { in: ["${val}"] } }) {
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
        request("https://countries.trevorblades.com/",query).then(({ continents }) => this.setState({ 
            filterDatas:continents
        },()=> this.setState(({ filterDatas }) => ({
            area: filterDatas.map(({ name }) => name).join(""),
            cityDatas:filterDatas[0].countries,
            loadingState:false
        }))))
    }
}

export default withRouter(EUList)