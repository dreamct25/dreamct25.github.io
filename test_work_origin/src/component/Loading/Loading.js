import { Component } from 'react'

import styles from './Styles'

const { Container } = styles 

class Loading extends Component {
    render(){
        let { props:{ haveLoading } } = this
        return(
            <Container>
                <div className={ haveLoading ? "loading-outer-frame active" : "loading-outer-frame"}>
                    <div className="loading-outer">
                        <div className="loadingI"></div>
                        <div className="loadingII"></div>
                        <div className="loading-text">{ haveLoading ? "Loading" : "Complated" }</div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Loading