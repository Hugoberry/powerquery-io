---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Vrátí obsah souboru ze systému souborů Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vrátí obsah souboru na adrese URL `url` ze systému souborů Azure Data Lake Storage. Pomocí `options` je možné řídit následující možnosti:

-   `BlockSize` : Počet bajtů, které se mají přečíst, než se počká na příjemce dat. Výchozí hodnota je 4 MB.
-   `RequestSize` : Počet bajtů, které se mají zkusit přečíst z jednoho požadavku HTTP na server. Výchozí hodnota je 4 MB.
-   `ConcurrentRequests` : Možnost ConcurrentRequests podporuje rychlejší stahování dat tím, že umožňuje zadat počet požadavků, které se provedou paralelně, za cenu vyššího využití paměti. Požadované množství paměti je (SouběžnéPožadavky \* VelikostPožadavku). Výchozí hodnota je 16.



## Category
Accessing data
