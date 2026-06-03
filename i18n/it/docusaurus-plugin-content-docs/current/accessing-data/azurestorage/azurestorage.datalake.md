---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Restituisce una tabella di spostamento che contiene i documenti trovati nel contenitore specificato e nelle relative sottocartelle di Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di spostamento con i documenti trovati nel contenitore specificato e nelle relative sottocartelle all'URL `endpoint` dell'account da un file system di Azure Data Lake Storage. È possibile specificare `options` per controllare le opzioni seguenti:

-   `BlockSize` : Numero di byte da leggere prima dell'attesa del consumer di dati. Il valore predefinito è 4 MB.
-   `RequestSize` : Numero di byte che è necessario tentare di leggere in una singola richiesta HTTP al server. Il valore predefinito è 4 MB.
-   `ConcurrentRequests` : L'opzione ConcurrentRequests per le richieste simultanee supporta il download più veloce dei dati specificando il numero di richieste da effettuare in parallelo, ma implica un utilizzo di memoria più elevato. La memoria necessaria è pari a (ConcurrentRequest \* RequestSize). Il valore predefinito è 16.
-   `HierarchicalNavigation` : Valore logico (true/false) che controlla se i file vengono restituiti in una visualizzazione ad albero o in un elenco semplice. Il valore predefinito è false.



## Category
Accessing data
