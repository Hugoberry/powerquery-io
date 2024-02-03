---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


## Description

Introduza o URL do seu servizo de Azure DevOps Analytics.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Details

Devolve o contido descargado do URL do servizo de Azure DevOps Analytics como un valor binario. A función usa credenciais distintas para organizacións diferentes.


