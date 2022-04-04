---
title: Manage alerts for team
sidebar_label: Manage alerts
---
In this tutorial, we'll go through how to setup alerts for your project whenever your test builds are finished. Currently, you can only set up alerts on Slack.

### Setting up slack alerts
<div style={{marginBottom: "24px"}}>
        <img style={{margin: "18px auto", marginBottom: "8px"}} src={require('@site/static/img/setting-up/slack-alert.png').default} />
        <div style={{textAlign: "center", fontSize: "13.4px", color: "rgba(255,255,255,0.3)"}}>Example of a slack alert</div>
</div>
If your team is using slack, setting up slack alerts can be the best method for alerts. To integrate with slack,
<ol style={{marginTop: "14px"}}>
        <li>Go to <b>Settings > Alerts</b></li>
        <li>Turn on Slack toggle and integrate the crusher app in your workspace.</li>
        <li>Select appropriate channels for dropdowns
                <ul>
                        <li><b>"Post notifications to"</b>: The channel you want "passed" build alerts to be posted to. You can leave this empty if you don't want alerts for "passed" builds.</li>
                        <li><b>"Alerts to"</b>: The channel for "failed" and "review required" build alerts.</li>
                </ul>
        </li>
</ol>

:::tip 🦖 &nbsp;&nbsp; Pros:
1. &nbsp; Get notified as soon as anything goes wrong. 
2. &nbsp; Complete visibility across the whole team
:::

### I don't see my slack channel in the dropdown?
This is a common issue that you'll face if you want to set up slack alerts for a private channel. In order to fix this, 
1. Open your slack channel.
2. Click on "View all members of Channel" (on the top right side)
3. Click on the "Integrations" tab and add "Crusher" app
4. Go back to Crusher Alerts settings and select your new slack channel.

If you still face any issues with the slack integration after the above steps, reach out to us at support@crusher.dev