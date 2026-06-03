---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Restituisce una tabella di navigazione con le tabelle disponibili nell'account specificato da un insieme di credenziali di archiviazione di Windows Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di navigazione contenente una riga per ogni tabella trovata nell'URL dell'account, `account`, da un insieme di credenziali di archiviazione di Azure. Ogni riga contiene un collegamento alla tabella di Azure. È possibile indicare un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `Timeout` : Valore di durata che controlla il tempo di attesa per la richiesta al server prima che venga abbandonata. Il valore predefinito è specifico dell'origine.



## Category
Accessing data
