---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Introduza o URL do seu servizo de Azure DevOps Analytics.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devolve o contido descargado do URL do servizo de Azure DevOps Analytics como un valor binario. A función usa credenciais distintas para organizacións diferentes.


