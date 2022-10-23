---
title: Crusher features
sidebar_label: Features
---


import TabItem from '@theme/TabItem';
import {css} from '@emotion/react';
import "../../src/styles/components/feature.scss"

export const FeatureItem = ({label, feature}) => {
  return (
    <div className={'feature-item'}>
  <span className="bold highlight_white label">{label}</span> <span className="feature-description"> {feature}</span>
  </div>);
}


<head>
  <title>Create a test - Crusher docs</title>
  <meta name="description" />
</head>


###### Creating tests

<FeatureItem label="🧑‍🚀 Low-code" feature="Create tests using low-code"/>

<FeatureItem label="📁 Test files" feature="Create tests with playwright + crusher SDK"/>

<FeatureItem label="👨🏽‍💻 Developer first" feature=""/>

<FeatureItem label="🕹️ Major primitive actions supported" feature=""/>

<FeatureItem label="📇 Git integration" feature=""/>

<FeatureItem label="🤾‍♀️ Debug tests" feature=""/>


###### Running tests

<FeatureItem label="🌐 Cross-browser" feature="Works across browsers + version."/>

<FeatureItem label="📁 Cross-platform" feature=""/>

<FeatureItem label="📁 ES6 syntax support" feature=""/>

<FeatureItem label="🗜️ Resilient tests" feature=""/>

<FeatureItem label="🧱 Auto element selector" feature=""/>

<FeatureItem label="🏃‍♂️ Parallelism" feature=""/>

<FeatureItem label="Local test execution/CI supported" feature=""/>

<FeatureItem label="⏩ Debug tests" feature=""/>



###### Management

<FeatureItem label="🗄️ Test management" feature=""/>
<FeatureItem label="🕰️ Monitoring" feature=""/>
<FeatureItem label="⏰ Alerts" feature=""/>
<FeatureItem label="📼 Test recordings" feature=""/>
<FeatureItem label="📤 Shareable reports" feature=""/>
