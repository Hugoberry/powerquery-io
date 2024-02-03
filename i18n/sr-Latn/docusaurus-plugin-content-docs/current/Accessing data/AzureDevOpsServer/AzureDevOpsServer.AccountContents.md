---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


## Description

Enter Url of your Azure DevOps Analytics Service.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Details

Returns the contents downloaded from the Azure DevOps Analytics Service url as a binary value. This function uses different credentials for different organizations.


