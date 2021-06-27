import styled from 'styled-components'

const cssStyle = {
    Apps:styled.div`
        min-height:100vh;
        margin:12px;
        .pages-btns{
            margin-bottom:12px;
            display:flex;
            justify-content:center;
            div{
                color:white;
                background-color:rgb(0,132,250);
                border-radius:8px;
                padding:5px 15px;
                margin:0 2px;
                cursor: pointer;
                user-select:none;
                transition:.7s ease;
                box-shadow:inset 0 0 0 0 rgba(0,0,0,0);
            }
            .active{
                color:black;
                background-color:rgb(255,255,250);
                box-shadow:inset 0 0 3px 1px rgba(0,0,0,.7);
            }
        }
    `
}

export default cssStyle