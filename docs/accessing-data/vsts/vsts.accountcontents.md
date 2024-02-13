---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Enter Url of your Azure DevOps Analytics Service.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the contents downloaded from the Azure DevOps Analytics Service url as a binary value. This function uses different credentials for different organizations.


