import React from "react";

import styled from '@emotion/styled'


export const UseCrusher = ({ children, color }) => (
    <div
        className="useCrusher_in_project">


        <CommandInput>
            <div className="flex justify-between" id="command-heading">
                <div>use crusher in a project</div>
                <div className="demo-video">play demo video</div>
            </div>

            <div id="command" className="flex items-center justify-between"><div>
            > npx <span className="crusherDevLabel">
                    crusher.dev</span></div>

                <CopyIcon height={20} width={20} onClick={() => {
                    copy("npx crusher.dev");
                    alert("copied to clipboard")
                }} /> </div>

            <div id="download">or download binary </div>
        </CommandInput>



    </div>
);




const CommandInput = styled.div`

    margin-top: 44px;
    #command-heading{
        width: 588px;
        max-width: 100%;
        font-size: 16px;
        font-weight: 500;
        margin-top: 20px;
   
    }

    #download{

        font-family: 'Gilroy';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.03em;

color: #626262;
    }
  #command{
    margin-left: -24px;
    width: 618px;
    max-width: 100%;
    padding: 12px 16px 12px 24px;
    gap: 8px;
    
    
    color: #8B8B8B;

    height: 46px;
    font-size: 16px;

    #copy-icon:hover{
        cursor: pointer;
        path{
            fill: white;
        }
    }

    
    background: #0C0C0C;
    border: 1px solid #1E1F1F;
    border-radius: 12px;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 8px;

    .crusherDevLabel{
        color: rgba(184, 255, 95, 1);
    }
  }

  .demo-video{
    letter-spacing: 0.04em;
    font-size: 13px;

color: #7A7A7A;
  }
`

function CopyIcon(props) {
    return (
        <svg
            id="copy-icon"
            width={24}
            height={24}
            viewBox={"0 0 24 24"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a49.147 49.147 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                fill="#B3B3B3"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75z"
                fill="#B3B3B3"
            />
        </svg>
    );
}

function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}