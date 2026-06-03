---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Restituisce il contenuto del file specificato da un file system di Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Restituisce il contenuto del file disponibile all'URL `url` da un file system di Azure Data Lake Storage. È possibile specificare `options` per controllare le opzioni seguenti:

-   `BlockSize` : Numero di byte da leggere prima dell'attesa del consumer di dati. Il valore predefinito è 4 MB.
-   `RequestSize` : Numero di byte che è necessario tentare di leggere in una singola richiesta HTTP al server. Il valore predefinito è 4 MB.
-   `ConcurrentRequests` : L'opzione ConcurrentRequests per le richieste simultanee supporta il download più veloce dei dati specificando il numero di richieste da effettuare in parallelo, ma implica un utilizzo di memoria più elevato. La memoria necessaria è pari a (ConcurrentRequest \* RequestSize). Il valore predefinito è 16.



## Category
Accessing data
