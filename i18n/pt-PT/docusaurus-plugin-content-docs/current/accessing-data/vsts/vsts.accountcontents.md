---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Introduza o URL do seu Serviço de Análise do Azure DevOps.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devolve o conteúdo transferido a partir do URL do Serviço de Análise do Azure DevOps como um valor binário. Esta função utiliza credenciais diferentes para organizações diferentes.


