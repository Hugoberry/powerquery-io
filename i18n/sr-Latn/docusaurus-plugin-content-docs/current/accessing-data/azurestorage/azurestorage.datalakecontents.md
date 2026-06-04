---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Vraća sadržaj navedene datoteke iz Azure Data Lake Storage sistema datoteka.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vraća sadržaj datoteke na URL adresi, `url`, iz Azure Data Lake Storage sistema datoteka. `options` se može navesti radi kontrole sledećih opcija:

-   `BlockSize` : Broj bajtova koje treba pročitati pre čekanja na korisnika podataka. Podrazumevana vrednost je 4 MB.
-   `RequestSize` : Broj bajtova čije čitanje treba pokušati u jednom HTTP zahtevu koji se uputi serveru. Podrazumevana vrednost je 4 MB.
-   `ConcurrentRequests` : Opcija ConcurrentRequests podržava brže preuzimanje podataka time što navodi broj zahteva koje treba uputiti istovremeno, nezavisno od opterećenja memorije. Potrebna memorija je (ConcurrentRequest \* RequestSize). Podrazumevana vrednost je 16.



## Category
Accessing data
