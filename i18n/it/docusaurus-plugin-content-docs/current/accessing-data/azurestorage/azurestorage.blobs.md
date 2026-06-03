---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Restituisce una tabella di navigazione con i contenitori disponibili nell'account specificato da un insieme di credenziali di archiviazione di Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di spostamento con una riga per ogni contenitore trovato all'URL `account` dell'account da un insieme di credenziali di archiviazione di Azure. Ogni riga contiene un collegamento ai BLOB dei contenitori. È possibile specificare `options` per controllare le opzioni seguenti:

-   `BlockSize` : Numero di byte da leggere prima dell'attesa del consumer di dati. Il valore predefinito è 4 MB.
-   `RequestSize` : Numero di byte che è necessario tentare di leggere in una singola richiesta HTTP al server. Il valore predefinito è 4 MB.
-   `ConcurrentRequests` : L'opzione ConcurrentRequests per le richieste simultanee supporta il download più veloce dei dati specificando il numero di richieste da effettuare in parallelo, ma implica un utilizzo di memoria più elevato. La memoria necessaria è pari a (ConcurrentRequest \* RequestSize). Il valore predefinito è 16.



## Category
Accessing data
