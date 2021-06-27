import styled from "styled-components";

const cssStyles = {
    Container:styled.div`
        .show-list{
            display:flex;
            flex-direction:column;
            justify-content:center;
            margin:0 100px;
            span{
                display:block;
                font-size:60px;
                align-self:left;
                margin-top:30px;
                margin-bottom:10px;
            }
            .table-outer{
                overflow:hidden;
                border-radius:8px;
                table{
                    width:100%;
                    border-collapse:collapse;
                    thead{
                        tr{
                            background-color: rgb(0,132,250);
                            th{
                                text-align: left;
                                color:white;
                                padding:12px;
                            }
                        }
                    }
                    tbody{
                        tr{
                            border-top:1px solid rgba(0,0,0,.3);
                            td{
                                padding:12px;
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }
    `
}

export default cssStyles