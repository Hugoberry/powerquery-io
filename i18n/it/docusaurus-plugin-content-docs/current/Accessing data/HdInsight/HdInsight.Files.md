---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Restituisce una tabella con le proprietà e i contenuti dei BLOB disponibili nel contenitore specificato da un insieme di credenziali di archiviazione di Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Restituisce una tabella con una riga per ogni file di BLOB trovato all'URL <code>account</code> del contenitore da un insieme di credenziali di archiviazione di Azure. Ogni riga contiene le proprietà del file e un collegamento al relativo contenuto.



## Category
Accessing data
