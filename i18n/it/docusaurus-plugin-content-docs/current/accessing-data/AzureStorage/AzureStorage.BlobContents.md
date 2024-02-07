---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Restituisce il contenuto del BLOB specificato da un insieme di credenziali di archiviazione di Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Restituisce il contenuto del BLOB disponibile all'URL <code>url</code> da un insieme di credenziali di archiviazione di Azure. È possibile specificare <code>options</code> per controllare le opzioni seguenti:    <ul><li><code>BlockSize</code> : Numero di byte da leggere prima dell&#39;attesa del consumer di dati. Il valore predefinito &#232; 4 MB.</li><li><code>RequestSize</code> : Numero di byte che &#232; necessario tentare di leggere in una singola richiesta HTTP al server. Il valore predefinito &#232; 4 MB.</li><li><code>ConcurrentRequests</code> : L&#39;opzione ConcurrentRequests per le richieste simultanee supporta il download pi&#249; veloce dei dati specificando il numero di richieste da effettuare in parallelo, ma implica un utilizzo di memoria pi&#249; elevato. La memoria necessaria &#232; pari a (ConcurrentRequest \* RequestSize). Il valore predefinito &#232; 16.</li></ul>



## Category
Accessing data
