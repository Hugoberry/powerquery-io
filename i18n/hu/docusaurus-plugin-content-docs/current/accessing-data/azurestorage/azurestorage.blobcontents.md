---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


A megadott blob tartalmát adja vissza egy Azure-tárolóból.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

A blob tartalmát adja vissza az URL-címen (`url`) egy Azure Storage-tárból. A(z) `options` megadásával vezérelhetők a következő beállítások:

-   `BlockSize` : Az adatfogyasztóra való várakozás előtt beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `RequestSize` : A kiszolgálóra egyetlen HTTP-kérelemben beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `ConcurrentRequests` : A ConcurrentRequests beállítás az adatok gyorsabb letöltését támogatja a párhuzamosan végzett kérelmek számának megadásával, a memória kihasználtságának árán. A szükséges memória (ConcurrentRequest \* RequestSize). Az alapértelmezett érték 16.



## Category
Accessing data
