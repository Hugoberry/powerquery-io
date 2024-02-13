---
title: MicrosoftGraphSecurity.Contents
---

# MicrosoftGraphSecurity.Contents


Connector for the Microsoft Graph Security API


## Syntax

```powerquery
MicrosoftGraphSecurity.Contents(
    version as Text.Type,
    optional options as Record.Type
) as table
```


## Remarks

The Microsoft Graph Security connector helps to connect different Microsoft 		and partner security products and services, to streamline security operations, and 		improve threat protection, detection, and response capabilities. Learn more about integrating with the Microsoft 		Graph Security API at "https://aka.ms/graphsecuritydocs". This connector will return the recent most 6000 rows 		of the result set. This constraint and the workaround to overcome this constraint is documented at 		"https://aka.ms/graphsecurityapiconstraints". You can either use the power query function ‘Specify custom Microsoft Graph Security URL to filter results’ or use the Power 		Query Editor to provide the $filter query per the constraint workarounds to get data beyond the initial 6000 rows.


## Examples

### Example #1 
Returns a table from the Microsoft Graph Security API.
```powerquery
MicrosoftGraphSecurity.Contents("v1.0")
```


### Example #2 
Returns a table from the Microsoft Graph Security API.
```powerquery
MicrosoftGraphSecurity.Contents("beta")
```



