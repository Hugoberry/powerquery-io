---
title: VSTS.Contents
---

# VSTS.Contents


Enter Url of your Azure DevOps Analytics Service.


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the contents downloaded from the Azure DevOps Analytics Service url as a binary value. This function uses global credentials for all the accessible organization.


