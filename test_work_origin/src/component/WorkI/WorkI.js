import { Component } from 'react'
import axios from 'axios'
import styles from './Styles'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'

const { Item } = styles

class WorkI extends Component {
    constructor(props){
        super(props)
        this.state = {
            datas:[],
            searchVal:"",
            moreNum:10,
            loadingState:false
        }
        this.searching = this.searching.bind(this)
        this.bindVal = this.bindVal.bind(this)
        this.loadMore = this.loadMore.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render(){
        let {
            state:{
                searchVal,
                datas,
                loadingState
            },
            deleteItem,
            searching,
            bindVal,
            loadMore
        } = this
        return(
            <Item>
                <div className="search-bar">
                    <input type="text" onChange={ bindVal } value={ searchVal }/>
                    <div className="search-btn" onClick={ searching }>Search</div>
                </div>
                { datas.length !== 0 && <ItemList propItem={ datas } deleteItemFn={ deleteItem } /> }
                { datas.length !== 0 && <div className="load-more-outer">
                    <div className="load-more-btn" onClick={ loadMore }>Load more</div>
                </div> }
                <Loading haveLoading={ loadingState }/>
            </Item>
        )
    }
    componentDidMount(){
        setTimeout(()=> this.getData(),200)
    }
    componentWillUnmount() {
        this.setState = ()=>false;
    }
    bindVal({ target:{ value } }){
        this.setState({ searchVal:value })
    }
    searching(){
        this.getData()
    }
    loadMore(){
        this.setState(({ moreNum }) => ({ moreNum:moreNum += 10}),()=> this.getData())
    }
    getData(){
        this.setState({ loadingState:true })
        axios.get(`https://hn.algolia.com/api/v1/search?query=${ this.state.searchVal }&hitsPerPage=${ this.state.moreNum }`).then(res => {
            let { status,data:{ hits } } = res
            
            if(status === 200){
                this.setState({ 
                    datas:hits,
                    loadingState:false
                })
            }
        }).catch(err => {
            this.setState({ loadingState:false })
            alert(err)
        })
    }
    deleteItem(id){
        let index = this.state.datas.findIndex(({ objectID }) => objectID === id)
        let arrayTemp = this.state.datas
        arrayTemp.splice(index,1)
        this.setState({ datas:arrayTemp })
    }
}

export default WorkI