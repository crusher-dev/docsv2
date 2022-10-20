import React from "react";
import { MainHeading } from '@theme/Heading';
import { css } from "@emotion/css";

const CustomCodePage = () => {
    return (
        <div className={containerCss}>
            <div className={'flex items-center'} classaName={headerCss}>
                <div>
                    <MainHeading style={{margin:0, padding: 0}}>Custom code usecases</MainHeading>
                    <div className={headerDescriptionCss}>Write performant reliable test using SDK. Or use it in no-code test</div>
                </div>
                <div style={{marginLeft: "auto"}} className="flex">
                    <input className={searchInputCss} type="text" placeholder="search APIs" />
                </div>
            </div>
        </div>
    )
};

const containerCss = css`
    padding-top: 40px;
    font-family: 'Gilroy';

`;

const headerCss = css`
    width: 100%;
    padding-bottom; 20px;
`;
const headerDescriptionCss = css`
    padding-top: 12px;
    color: #737373;
    font-size: 13px;
`;
const searchInputCss = css`
    background: rgba(0, 0, 0, 0.11);
    border: 0.5px solid rgba(237, 237, 237, 0.11);
    border-radius: 12px;
    width: 204px;
    padding: 10px 12px;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    outline: none;
`;
export { CustomCodePage };