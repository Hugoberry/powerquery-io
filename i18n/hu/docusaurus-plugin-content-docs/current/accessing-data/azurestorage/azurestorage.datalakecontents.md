---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Egy adott fájl tartalmát adja vissza egy Azure Data Lake Storage-fájlrendszerből.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

A fájl tartalmát adja vissza az URL-címen (`url`) egy Azure Data Lake Storage-fájlrendszerből. A(z) `options` megadásával vezérelhetők a következő beállítások:

-   `BlockSize` : Az adatfogyasztóra való várakozás előtt beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `RequestSize` : A kiszolgálóra egyetlen HTTP-kérelemben beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `ConcurrentRequests` : A ConcurrentRequests beállítás az adatok gyorsabb letöltését támogatja a párhuzamosan végzett kérelmek számának megadásával, a memória kihasználtságának árán. A szükséges memória (ConcurrentRequest \* RequestSize). Az alapértelmezett érték 16.



## Category
Accessing data
