---
title: VSTS.AccountContents
---

# VSTS.AccountContents


Immettere l'URL del Servizio analisi di Azure DevOps.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Restituisce il contenuto scaricato dall'URL del Servizio analisi di Azure DevOps come valore binario. Questa funzione usa credenziali diverse a seconda delle organizzazioni.


