import { Component } from 'react'
import styles from '../ItemList/Styles'

const { Container } = styles

class ItemList extends Component {
    render(){
        let {
            props:{
                propItem
            }
        } = this
        return(
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Comments</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        { propItem.map(({ objectID,author,num_comments,title,url },index) => 
                            <tr key={ index }>
                                <td>{ objectID }</td>
                                <td>{ author }</td>
                                <td>{ num_comments }</td>
                                <td>{ title }</td>
                                <td>{ url }</td>
                                <td><span onClick={ this.deleteProp.bind(this,objectID) }>Delete</span></td>
                            </tr>
                        ) }
                    </tbody>
                </table>
            </Container>
        )
    }
    deleteProp(id){
        this.props.deleteItemFn(id)
    }
}

export default ItemList