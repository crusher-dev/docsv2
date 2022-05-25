/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ReactNode, useState, useCallback} from 'react';
import {MDXProvider} from '@mdx-js/react';

import renderRoutes from '@docusaurus/renderRoutes';
import type {PropVersionMetadata} from '@docusaurus/plugin-content-docs-types';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import type {DocumentRoute} from '@theme/DocItem';
import type {Props} from '@theme/DocPage';
import IconArrow from '@theme/IconArrow';
import BackToTopButton from '@theme/BackToTopButton';
import {matchPath} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import Navbar from '@theme/Navbar';

import clsx from 'clsx';
import styles from './styles.module.css';
import {ThemeClassNames, docVersionSearchTag} from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';
import {css} from "@emotion/css";

type DocPageContentProps = {
  readonly currentDocRoute: DocumentRoute;
  readonly versionMetadata: PropVersionMetadata;
  readonly children: ReactNode;
};

function GithubSVG(props) {
  return (
    <svg
      width={19}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_657_286)">
        <path
          d="M9.607.303A8.72 8.72 0 006.85 17.297c.436.08.577-.19.577-.42v-1.622c-2.426.527-2.931-1.03-2.931-1.03-.397-1.007-.969-1.275-.969-1.275-.79-.542.06-.53.06-.53.876.06 1.337.899 1.337.899.778 1.332 2.04.947 2.538.724.077-.563.303-.948.553-1.165-1.936-.222-3.972-.97-3.972-4.31 0-.953.34-1.73.898-2.34-.09-.221-.389-1.108.085-2.309 0 0 .732-.234 2.398.894a8.363 8.363 0 012.183-.293c.74.003 1.487.1 2.184.293 1.665-1.128 2.396-.894 2.396-.894.474 1.201.176 2.089.086 2.308.559.61.897 1.389.897 2.34 0 3.35-2.04 4.088-3.981 4.303.312.27.598.801.598 1.615v2.393c0 .232.14.504.582.418A8.722 8.722 0 009.607.303z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_657_286">
          <path
            fill="#fff"
            transform="translate(.887 .303)"
            d="M0 0h17.44v17.44H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function DocPageContent({
  currentDocRoute,
  versionMetadata,
  children,
}: DocPageContentProps): JSX.Element {
  const {pluginId, version} = versionMetadata;

  const sidebarName = currentDocRoute.sidebar;
  const sidebar = sidebarName
    ? versionMetadata.docsSidebars[sidebarName]
    : undefined;

  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer((value) => !value);
  }, [hiddenSidebar]);

  return (
    <Layout
      wrapperClassName={ThemeClassNames.wrapper.docsPages}
      pageClassName={ThemeClassNames.page.docsDocPage}
      searchMetadata={{
        version,
        tag: docVersionSearchTag(pluginId, version),
      }}>
      <div className={clsx(styles.docPage)}>
        <BackToTopButton />

        {sidebar && (
          <aside
            className={clsx(styles.docSidebarContainer, {
              [styles.docSidebarContainerHidden]: hiddenSidebarContainer,
            })}
            onTransitionEnd={(e) => {
              if (
                !e.currentTarget.classList.contains(styles.docSidebarContainer)
              ) {
                return;
              }

              if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
              }
            }}>
            <DocSidebar
              key={
                // Reset sidebar state on sidebar changes
                // See https://github.com/facebook/docusaurus/issues/3414
                sidebarName
              }
              sidebar={sidebar}
              path={currentDocRoute.path}
              onCollapse={toggleSidebar}
              isHidden={hiddenSidebar}
            />

            {hiddenSidebar && (
              <div
                className={styles.collapsedDocSidebar}
                title={translate({
                  id: 'theme.docs.sidebar.expandButtonTitle',
                  message: 'Expand sidebar',
                  description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
                })}
                aria-label={translate({
                  id: 'theme.docs.sidebar.expandButtonAriaLabel',
                  message: 'Expand sidebar',
                  description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
                })}
                tabIndex={0}
                role="button"
                onKeyDown={toggleSidebar}
                onClick={toggleSidebar}>
                <IconArrow className={styles.expandSidebarButtonIcon} />
              </div>
            )}
          </aside>
        )}
        {/* CUSTOM CODE - wrapper div */}
        <div>
          {/* CUSTOM CODE - navbar placement */}
          <Navbar />
          <div className={subMenu}>
             <div className='linksbox'>
              <div className='active'>Using Crusher</div>
                <div>CLI</div>
             </div>

             <div className='github-button'>
               <GithubSVG style={{marginRight: 8}}></GithubSVG>Github
             </div>
           </div>
          <main
            className={clsx(styles.docMainContainer, {
              [styles.docMainContainerEnhanced]:
                hiddenSidebarContainer || !sidebar,
            })}>

           
            <div
              className={clsx(
                'container padding-top--md padding-bottom--lg',
                styles.docItemWrapper,
                {
                  [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
                },
              )}>
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </div>


          </main>

          <FooterDoc/>
          
        </div>
      </div>
    </Layout>
  );
}

const subMenu = css`
  display: fixed;
  background: #101010;
border-bottom: 1px solid #1C1C1C;
border-top: 1px solid #1C1C1C;
height: 40px;
padding-left: 100px;
justify-content: space-between;
padding-right: 30px;

// position: fixed;
width: 100%;
z-index: 100000;

align-items: center;
.linksbox{
  align-items: center;
  display: flex;
  font-size: 13.5px;
  letter-spacing: .35px;

  div{
    margin-right: 20px;
    cursor: pointer;
    :hover{
      color: #ec73ff;
      text-decoration: underline;
    }
  }

  .active{
    color: #ec73ff;
  }
}

.github-button{
  font-size: 13.5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover{
    path{
      fill: #ec73ff;
    }
    color: #ec73ff;
    text-decoration: underline;
  }
}

`



const style = css`
  background: #0a0a0b;
  width: 100%;
  padding: 32px 0;
  overflow: hidden;
`

const sidebarStyle = css`
  width: 204px;
  margin-right: 82px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: start;
    margin-top: 20px;
    padding: 0 28px;
  }

   .userImage{

    height: 24px;
    width: 24px;
    border-radius: 8px;
    margin-right: 8px;
  }
  .userImageBlock{
    display:flex;
  }


`

const mainStyle = css`
  width: 748px !important;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .helpful-text{
    font-size: 14px;
    font-family: 'Gilroy';
   
  }
  @media only screen and (max-width: 600px) {
    padding: 0 28px;
    .helpful-text{
      margin-bottom:12px;
    }
  }
`

const footerBottomStyle = css`
  width: 748px !important;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .first-block{
    margin-right: 160px;
  }
  .menu-heading{
    font-weight: 600;
    margin-bottom: 28px;
  }
  .menu-item{
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    font-size: 13px;
  }

  @media only screen and (max-width: 600px) {
    justify-content: start;
    margin-top: 20px;
    padding: 0 28px;

    .first-block{
      margin-right: 32px;
    }
  }
`

const footerBottomSidebar = css`
  width: 204px;
  margin-right: 82px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media only screen and (max-width: 600px) {
    justify-content: start;
    margin-top: 20px;
    padding: 0 28px;
  }

  flex-wrap: wrap;
  .menu-heading{
    font-weight: 600;
    margin-bottom: 28px;
  }
  .menu-item{
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    font-size: 13px;
  }

`

const feedback = css`
  display: flex;
  margin-left: 20px;
  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
  flex-wrap: wrap;
  .button{
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    height: 30px;
    padding : 0 20px;
    color: #fff;
    align-items: center;
    display: flex;
    font-weight: 400;
    margin: 0 12px 0 0;
    :hover{
      background: rgba(255,255,255,0.1);
    }
  }
`

const bottomContainer = css`
    padding: 48px 0 20px 0;
    border-top: 1px solid #ffffff08;
    margin-top: 32px !important;

    @media only screen and (max-width: 600px) {
      padding: 20px 0 20px 0 !important;
    }
`


function DisLikeSVG(props) {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.278 14c.646 0 .429-1.381.429-1.381s1.381-3.81 2.702-4.825a2.916 2.916 0 00.64-1.08c.09-.181.278-.458.681-.701L9.41.267S7.364.001 5.313.044c-.82-.066-1.69-.071-2.382.077-2.35.5-1.762 2.14-1.762 2.14-1.267.952-.546 2.141-.546 2.141-1.127 1.176-.02 2.162-.02 2.162s-.61.95.177 1.668c.981.898 3.644.3 3.644.3a8.53 8.53 0 00.594-.123s.921-.429 0 2.365C4.096 13.568 5.631 14 6.278 14zM10.359.682l1 4.756a.653.653 0 00.61.494h1.91L13.882.19h-3.12c-.28-.003-.46.22-.403.492z"
        fill="#FF6577"
      />
    </svg>
  );
}


function LikeSVG(props) {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.722 0c-.646 0-.429 1.381-.429 1.381s-1.381 3.81-2.702 4.825a2.916 2.916 0 00-.64 1.08c-.09.181-.278.458-.682.701l1.322 5.746s2.044.266 4.095.223c.82.066 1.69.071 2.382-.077 2.35-.5 1.762-2.14 1.762-2.14 1.267-.952.546-2.141.546-2.141 1.127-1.176.02-2.162.02-2.162s.61-.95-.177-1.668c-.981-.898-3.644-.3-3.644-.3a8.53 8.53 0 00-.594.123s-.921.429 0-2.365C9.904.432 8.369 0 7.722 0zM3.641 13.318l-1-4.756a.653.653 0 00-.61-.494H.121L.118 13.81h3.12c.28.003.46-.22.403-.492z"
        fill="#B6FF7D"
      />
    </svg>
  );
}


function FooterDoc() {
  return <div className={style}>


    <div className="row">
      <div
        className={mainStyle}>
        <div className='helpful-text'>
          Was this doc helpful?
        </div>
        <div className={feedback}>
          <div className='button'><LikeSVG style={{marginRight: 12}}/>yes</div>
          <div className='button'><DisLikeSVG style={{marginRight: 12}}/>could be better</div>
        </div>
      </div>
      <div className={sidebarStyle}>
        <div style={{ marginRight: 12, fontSize: 12}}>
          by
        </div>
   
      <div className='userImageBlock'>
        <img src="https://avatars.githubusercontent.com/u/6849438?v=4" className='userImage'/>
        <img src="https://avatars.githubusercontent.com/u/6849438?v=4" className='userImage'/>
      </div>

      </div>
    </div>

    <div className={`${bottomContainer} row`}>
    
    <div
        className={footerBottomStyle}>

          <div style={{display: 'flex'}}>
            <div className='first-block'>
              <div className='menu-heading'>Reference</div>
              <div className='menu-item'>
                 <EditSVG style={{marginRight: 12}}/> Edit this page
              </div>
              <div className='menu-item'>
                 <QuestionSVG style={{marginRight: 12}}/> Raise an issue
              </div>
            </div>

            <div className='second-block'>
              <div className='menu-heading'>Get involved</div>
              <div className='menu-item'>
                 <EditSVG style={{marginRight: 12}}/> Request a feature
              </div>
              <div className='menu-item'>
                 <QuestionSVG style={{marginRight: 12}}/> Get in touch
              </div>
            </div>
            
          </div>

     </div>

     <div className={footerBottomSidebar}>

      <div className='first-block'>
              <div className='menu-heading'>Other</div>
              <div className='menu-item'>
                 Join discord
              </div>
              <div className='menu-item'>
                  Follow on Github
              </div>
            </div>
       </div>

    </div>

  </div>;
}


function QuestionSVG(props) {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.188 11.813A2.19 2.19 0 017 14a2.19 2.19 0 01-2.188-2.188A2.19 2.19 0 017 9.626a2.19 2.19 0 012.188 2.188zM5.066.688l.372 7.438c.017.349.305.623.655.623h1.814c.35 0 .638-.274.655-.623L8.934.689A.656.656 0 008.28 0H5.72a.656.656 0 00-.655.689z"
        fill="#A3A4A5"
      />
    </svg>
  );
}




function EditSVG(props) {
  return (
    <svg
      width={11}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_1_67)" fill="#A3A4A5">
        <path d="M6.686 1.676L.692 7.669l-.679 2.766a.456.456 0 00.552.552l2.766-.68 5.993-5.993-2.638-2.638zM.878 10.122l.234-.951.717.717-.95.234zM10.798 1.865L9.135.202a.69.69 0 00-.976 0l-.662.662 2.639 2.639.662-.662a.69.69 0 000-.976z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_67">
          <path fill="#fff" d="M0 0h11v11H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}



function DocPage(props: Props): JSX.Element {
  const {
    route: {routes: docRoutes},
    versionMetadata,
    location,
  } = props;
  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute),
  );
  if (!currentDocRoute) {
    return <NotFound />;
  }
  return (
    <>
      <Head>
        {/* TODO we should add a core addRoute({htmlClassName}) generic plugin option */}
        <html className={versionMetadata.className} />
      </Head>
      <DocPageContent
        currentDocRoute={currentDocRoute}
        versionMetadata={versionMetadata}>
        {renderRoutes(docRoutes, {versionMetadata})}
      </DocPageContent>
    </>
  );
}

export default DocPage;
