---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Restituisce una tabella di spostamento che contiene i documenti trovati nel contenitore specificato e nelle relative sottocartelle di Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella di spostamento con i documenti trovati nel contenitore specificato e nelle relative sottocartelle all'URL <code>endpoint</code> dell'account da un file system di Azure Data Lake Storage. È possibile specificare <code>options</code> per controllare le opzioni seguenti:    <ul><li><code>BlockSize</code> : Numero di byte da leggere prima dell&#39;attesa del consumer di dati. Il valore predefinito &#232; 4 MB.</li><li><code>RequestSize</code> : Numero di byte che &#232; necessario tentare di leggere in una singola richiesta HTTP al server. Il valore predefinito &#232; 4 MB.</li><li><code>ConcurrentRequests</code> : L&#39;opzione ConcurrentRequests per le richieste simultanee supporta il download pi&#249; veloce dei dati specificando il numero di richieste da effettuare in parallelo, ma implica un utilizzo di memoria pi&#249; elevato. La memoria necessaria &#232; pari a (ConcurrentRequest \* RequestSize). Il valore predefinito &#232; 16.</li><li><code>HierarchicalNavigation</code> : Valore logico (true/false) che controlla se i file vengono restituiti in una visualizzazione ad albero o in un elenco semplice. Il valore predefinito &#232; false.</li></ul>



## Category
Accessing data
