---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Restituisce una tabella di navigazione con le tabelle disponibili nell&#39;account specificato da un insieme di credenziali di archiviazione di Windows Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di spostamento contenente una riga per ogni tabella trovata nell'URL dell'account, <code>account</code>, da un insieme di credenziali di archiviazione di Azure. Ogni riga contiene un collegamento alla tabella di Azure. È possibile fornire un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>Timeout</code> : Valore di durata che controlla il tempo di attesa per la richiesta al server prima che venga abbandonata. Il valore predefinito &#232; specifico dell&#39;origine.</li></ul>



## Category
Accessing data
