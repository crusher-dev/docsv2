import React from "react";
import { MainHeading } from '@theme/Heading';
import { css } from "@emotion/css";
import Comparison from "../components/page/code";
import CodeBlock from "../theme/CodeBlock";


const SelectElementContainer = () => {
    return (
        <div style={{padding: "6px 0px"}}>
            <div>
                <CodeBlock className={"language-javascript"}>{`// Waits automatically till the element is visible, with default timeout (30s)
let element = await crusherSdk.page.quer\ySelector("selector");

 
`}

{`// Waits automatically till the element is visible, with 5s timeout
let element = await crusherSdk.page.querySelector("selector", { timeout: 5000 });
 
`}

{`// Doesn't wait, returns null if no element found
let element = await crusherSdk.page.querySelector("selector", { waitUntil: null })`}

                </CodeBlock>
            </div>
            <div className={timeoutCss}>Default timeout (30s)</div>
        </div>
    )
};


const MousePageContainer = () => {
    return (
        <div style={{padding: "6px 0px"}}>
            <div>
                <CodeBlock className={"language-javascript"}>{`// Using ‘page.mouse’ to trace a 100x100 square.
await page.mouse.move(0, 0);
await page.mouse.down();
await page.mouse.move(0, 100);
await page.mouse.move(100, 100);
await page.mouse.move(100, 0);
await page.mouse.move(0, 0);
await page.mouse.up();`}

                </CodeBlock>
            </div>
            <div className={timeoutCss}>Default timeout (30s)</div>
        </div>
    )
};

const timeoutCss = css`
    color: #414141;
    margin-left: 4px;
`;
const coreItems = [
    { id: "Selecting", content: (<SelectElementContainer/>) },
    { id: "Click", content: "Mouse" },
    { id: "Hover", content: "Mouse" },
    { id: "Screenshot", content: "Mouse" },
    { id: "Assertions", content: "Mouse" },
];

const pageItems = [
    { id: "Mouse", content: (<MousePageContainer/>) },
    { id: "Keyboard", content: "Keyboard" },
];


const CustomCodePage = () => {

    const handleTabCallback = (id) => {
        // alert("Clicked on " + id);
    }
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
            <div className={contentCss}>
                <div className={'flex'} style={{gap: 24}}>
                    <Comparison callback={handleTabCallback} items={coreItems} title={"Core utilities"} className={"flex-1"}/>
                    <Comparison callback={handleTabCallback} items={pageItems} title={"Page utilities"} className={"flex-1"}/>

                </div>

            </div>
        </div>
    )
};

const contentCss= css`
    margin-top: 36px;
    width: 100%;
`;
const containerCss = css`
    padding-top: 40px;
    font-family: 'Gilroy';

`;

const headerCss = css`
    width: 100%;
    padding-bottom; 20px;
`;
const headerDescriptionCss = css`
    padding-top: 8px;
    color: #737373;
    font-size: 13px;
`;
const searchInputCss = css`
    background: rgba(0, 0, 0, 0.11);
    border: 0.5px solid rgba(237, 237, 237, 0.11);
    border-radius: 8px;
    width: 204px;
    padding: 8px 12px;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    outline: none;
`;
export { CustomCodePage };