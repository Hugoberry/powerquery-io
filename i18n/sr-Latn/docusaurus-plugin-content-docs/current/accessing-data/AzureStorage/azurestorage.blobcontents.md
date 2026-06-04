---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Vraća sadržaj navedenog blob objekta iz Azure bezbednog skladišta.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vraća sadržaj blob objekta na URL adresi, `url`, iz Azure bezbednog skladišta. `options` se može navesti radi kontrole sledećih opcija:

-   `BlockSize` : Broj bajtova koje treba pročitati pre čekanja na korisnika podataka. Podrazumevana vrednost je 4 MB.
-   `RequestSize` : Broj bajtova čije čitanje treba pokušati u jednom HTTP zahtevu koji se uputi serveru. Podrazumevana vrednost je 4 MB.
-   `ConcurrentRequests` : Opcija ConcurrentRequests podržava brže preuzimanje podataka time što navodi broj zahteva koje treba uputiti istovremeno, nezavisno od opterećenja memorije. Potrebna memorija je (ConcurrentRequest \* RequestSize). Podrazumevana vrednost je 16.



## Category
Accessing data
