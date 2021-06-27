import styled from "styled-components";

const cssStyles = {
    Container:styled.div`
        .top{
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            .table-outer{
                overflow:hidden;
                border-radius:8px;
                border:1px solid rgba(0,0,0,.3);
                .top-list{
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
                            td:nth-of-type(2){
                                span{
                                    cursor: pointer;
                                    user-select:none;
                                    transition:.7s ease;
                                }
                                span:hover{
                                    color:rgb(0,132,250);
                                }
                            }
                            td:nth-of-type(3){
                                text-align:center;
                            }
                        }
                    }
                }
            }
            
        }
        
    `
}

export default cssStyles