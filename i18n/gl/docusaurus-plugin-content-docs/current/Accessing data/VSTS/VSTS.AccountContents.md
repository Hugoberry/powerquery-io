---
title: VSTS.AccountContents
---

# VSTS.AccountContents


## Description

Introduza o URL do seu servizo de Azure DevOps Analytics.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Details

Devolve o contido descargado do URL do servizo de Azure DevOps Analytics como un valor binario. A función usa credenciais distintas para organizacións diferentes.


