---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Vraća navigacionu tabelu koja sadrži kontejnere pronađene na navedenom nalogu iz Azure bezbednog skladišta.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu za navigaciju koja sadrži red za svaki kontejner pronađen na URL adresi naloga, `account`, iz Azure bezbednog skladišta. Svaki red sadrži vezu ka blob objektima kontejnera. `options` se može navesti radi kontrole sledećih opcija:

-   `BlockSize` : Broj bajtova koje treba pročitati pre čekanja na korisnika podataka. Podrazumevana vrednost je 4 MB.
-   `RequestSize` : Broj bajtova čije čitanje treba pokušati u jednom HTTP zahtevu koji se uputi serveru. Podrazumevana vrednost je 4 MB.
-   `ConcurrentRequests` : Opcija ConcurrentRequests podržava brže preuzimanje podataka time što navodi broj zahteva koje treba uputiti istovremeno, nezavisno od opterećenja memorije. Potrebna memorija je (ConcurrentRequest \* RequestSize). Podrazumevana vrednost je 16.



## Category
Accessing data
