import styled from "styled-components";

const cssStyles = {
    Container:styled.div`
        .loading-outer-frame{
            display:flex;
            justify-content:center;
            align-items:center;
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:-1;
            opacity:0;
            background-color:rgba(0,0,0,.7);
            transition:.5s ease;
            .loading-outer{
                position:relative;
                .loadingI{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%) rotate(0deg);
                    width:120px;
                    height:120px;
                    border-radius:50%;
                    border:4px solid rgb(0,132,250);
                    border-top:4px solid transparent;
                    animation:loadingI 1.2s linear infinite;
                }
                @keyframes loadingI {
                    100%{
                        transform:translate(-50%,-50%) rotate(360deg);
                    }
                }
                .loadingII{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%) rotate(0deg);
                    width:120px;
                    height:120px;
                    border-radius:50%;
                    border:4px solid white;
                    border-top:4px solid transparent;
                    border-left:4px solid transparent;
                    animation:loadingII 1.2s linear infinite;
                }
                @keyframes loadingII {
                    100%{
                        transform:translate(-50%,-50%) rotate(-360deg);
                    }
                }
                .loading-text{
                    color:white;
                }
            }
        }
        .active{
            z-index:1;
            opacity:1;
        }
    `
}

export default cssStyles