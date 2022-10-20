import clsx from 'clsx';
import React, { useState } from 'react';

import styles from './index.module.scss';
import { css } from '@emotion/css'

function TabItem({ key, children, ...props }) {
  return (<div {...props}>{children}</div>)
}

export default function CodeBlock({items, title, callback, ...props}) {
  if(!items) return null;

  const tabItems = items.map((item, index) => {
    return (
      <TabItem onClick={callback.bind(this, item.id)} key={item.id}>{item.content}</TabItem>
    )
  });

  return (
    <div {...props} >

      <div className={contentBox}>
        <div className='content-section'>
          <div className='heading'>
            {title}
          </div>


          <Tab>
            {tabItems}
          </Tab>


        </div>
      </div>

    </div>
  );
}


const contentBox = css`

display: flex;
gap: 20px;
.content-section{}


.heading{
  font-family: 'Gilroy';
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.03em;

  color: #FFFFFF;
}

.content-section{
  width: 100%;
}
`

export const Tab = ({ children }) => {

  const items = React.useMemo(() => {
    const iterativeChild = Array.isArray(children) ? children : [children]
    return iterativeChild.map(({ key }) => key)
  }, [children])

  const [selected, setSelected] = useState(items[0])

  const ToShow = React.useMemo(() => {
    const iterativeChild = Array.isArray(children) ? children : [children]
    return iterativeChild.filter(({ key }) => key === selected)[0]
  }, [children, selected])


  return (

    <div className={tabCSS}>
      <div className='heading-box'>
        {
          items.map((item) => {
            const isSelected = item === selected;
            return (
              <div
                onClick={setSelected.bind(this, item)}
                className={`item ${isSelected && 'selected'}`}>{item}</div>
            )
          })
        }

      </div>
      <div className="content">
        {ToShow}
      </div>

    </div>
  )


}

const tabCSS = css`

width: 100%;

background: #0F0F0F;
border: 1px solid #1E1F1F;
border-radius: 20px;
overflow: hidden;
margin-top: 20px;

.heading-box{
  padding-left: 20px;
  background: #0F0F0F;
  border-bottom: 1px solid #1E1F1F;
  display: flex;
  gap: 20px;
  padding-top:12px;

}

.item{
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  cursor: pointer;
  height: 32px;
  letter-spacing: 0.03em;

  :hover{
    border-bottom: 2px solid #A45CFF;
    color: #A45CFF;
  }
}
.selected{
  border-bottom: 2px solid #A45CFF;
  color: #A45CFF;

}

.content{
  padding: 12px 20px;


  font-weight: 400;
  font-size: 14px;
  line-height: 21px;


  letter-spacing: 0.03em;
}


`