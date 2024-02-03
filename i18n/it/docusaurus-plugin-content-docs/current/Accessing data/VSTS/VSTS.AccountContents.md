---
title: VSTS.AccountContents
---

# VSTS.AccountContents


## Description

Immettere l&#39;URL del Servizio analisi di Azure DevOps.


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Details

Restituisce il contenuto scaricato dall'URL del Servizio analisi di Azure DevOps come valore binario. Questa funzione usa credenziali diverse a seconda delle organizzazioni.


