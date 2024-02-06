---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


Immettere l&#39;URL del Servizio analisi di Azure DevOps.


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Remarks

Restituisce il contenuto scaricato dall'URL del Servizio analisi di Azure DevOps come valore binario. Questa funzione usa credenziali diverse a seconda delle organizzazioni.


