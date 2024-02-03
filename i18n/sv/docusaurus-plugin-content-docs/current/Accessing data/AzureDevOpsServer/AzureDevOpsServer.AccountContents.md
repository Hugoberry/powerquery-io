---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


## Description

Ange URL för din Azure DevOps Analytics Service.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Details

Returnerar det innehåll som har hämtas från Azure DevOps Analytics Service-URL:en som ett binärt värde. Funktionen använder olika autentiseringsuppgifter för olika organisationer.


