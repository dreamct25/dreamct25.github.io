import styled from "styled-components";

const cssStyles = {
    Item:styled.div`
        .search-bar{
            display:flex;
            margin:10px 0;
            input{
                border-radius:8px 0 0 8px;
                border:none;
                outline:none;
                box-shadow:inset 0 0 0 1px rgb(0,0,0,.5);
            }
            .search-btn{
                color:white;
                background-color:rgb(0,132,250);
                border-radius:0 8px 8px 0;
                padding:5px 15px;
                cursor: pointer;
                user-select:none;
            }
        }
        .load-more-outer{
            display:flex;
            justify-content:center;
            margin:10px 0;
            .load-more-btn{
                cursor: pointer;
                user-select:none;
                color:white;
                background-color:rgb(0,132,250);
                border-radius:8px;
                padding:5px 15px;
                width: 80px;
                text-align:center;
            }
        }
    
    `
}

export default cssStyles