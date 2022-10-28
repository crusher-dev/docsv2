import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA, mauve, mauveDark, greenDark, grayDark, whiteA } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { VercelIntegrationButton } from '../buttons/vercel.button';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: "100%",
  backgroundColor: mauveDark.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,
  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 0px ${grayDark.gray4}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: "#d9d8d8",
  boxShadow: `0 1px 0 #d9d8d8`,
  overflow: "hidden",
  '&[data-state="closed"]': { backgroundColor:  mauveDark.mauve2 },
  '&[data-state="open"]': { backgroundColor:  mauveDark.mauve2 },
  '&:hover': { backgroundColor:  mauveDark.mauve3 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: mauveDark.mauve11,
  backgroundColor: mauveDark.mauve1,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
  color: whiteA.whiteA9,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

// Your app...
export const AccordionDemo = () => { 
  const [value, setvalue]  = React.useState(["item-1"]);
  return (
    <Accordion type="multiple" defaultValue={"item-1"} value={value} onValueChange={(val)=> setvalue(val)} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger> 🚀 &nbsp;Install Crusher integration</AccordionTrigger>
        <AccordionContent>
          <div style={{lineHeight: 1.5}}>Setup vercel integration with a single click.</div><br/>
          <VercelIntegrationButton/>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Link your github repo to vercel</AccordionTrigger>
        <AccordionContent>
          <li>Go to Project settings -> Integration</li>
          <li>Click connect in github integration</li>
          <img src="https://i.imgur.com/MxcfD6R.png"/>
          <li>Select your github repo</li>
        </AccordionContent>
      </AccordionItem>

      <style>{`
        h3 {
          overflow: hidden !important;
        }
      `}</style>
    </Accordion>
  );
}
