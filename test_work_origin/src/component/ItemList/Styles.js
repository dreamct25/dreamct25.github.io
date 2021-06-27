import styled from "styled-components";

const cssStyles = {
    Container:styled.div`
        overflow:hidden;
        border-radius:8px;
        border:1px solid rgba(0,0,0,.3);
        table{
            width:100%;
            border-collapse:collapse;
            thead{
                tr{
                    background-color:rgb(0,132,250);
                    th{
                        color:white;
                        text-align:left;
                        padding:12px;
                    }
                }
            }
            tbody{
                tr{
                    border-top:1px solid rgba(0,0,0,.3);
                    td{
                        text-align:left;
                        padding:12px;
                        span{
                            color:white;
                            display:block;
                            padding:5px 15px;
                            border-radius:8px;
                            background-color:rgb(0,132,250);
                            cursor: pointer;
                            user-select:none;
                        }
                    }
                }
            }
        }
    `
}

export default cssStyles