---
title: VSTS.AccountContents
---

# VSTS.AccountContents


## Description

Enter Url of your Azure DevOps Analytics Service.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Details

Returns the contents downloaded from the Azure DevOps Analytics Service url as a binary value. This function uses different credentials for different organizations.


