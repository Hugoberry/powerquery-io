---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Vrátí obsah zadaného objektu blob z trezoru úložiště Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vrátí obsah objektu blob na adrese URL `url` z trezoru Azure Storage. Pomocí `options` je možné řídit následující možnosti:

-   `BlockSize` : Počet bajtů, které se mají přečíst, než se počká na příjemce dat. Výchozí hodnota je 4 MB.
-   `RequestSize` : Počet bajtů, které se mají zkusit přečíst z jednoho požadavku HTTP na server. Výchozí hodnota je 4 MB.
-   `ConcurrentRequests` : Možnost ConcurrentRequests podporuje rychlejší stahování dat tím, že umožňuje zadat počet požadavků, které se provedou paralelně, za cenu vyššího využití paměti. Požadované množství paměti je (SouběžnéPožadavky \* VelikostPožadavku). Výchozí hodnota je 16.



## Category
Accessing data
