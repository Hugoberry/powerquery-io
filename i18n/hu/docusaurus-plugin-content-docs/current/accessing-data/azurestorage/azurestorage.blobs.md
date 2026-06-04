---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Egy Azure-tárolócsoportbeli fiók tárolóit tartalmazó navigációs tábla visszaadása.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Egy navigációs táblát ad vissza az Azure-tárfiókból, amely a fiók URL-címén (`account`) talált minden egyes tárolóhoz tartalmaz egy sort. Az egyes sorokban hivatkozás található a tárolóblobokra. A(z) `options` megadásával vezérelhetők a következő beállítások:

-   `BlockSize` : Az adatfogyasztóra való várakozás előtt beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `RequestSize` : A kiszolgálóra egyetlen HTTP-kérelemben beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `ConcurrentRequests` : A ConcurrentRequests beállítás az adatok gyorsabb letöltését támogatja a párhuzamosan végzett kérelmek számának megadásával, a memória kihasználtságának árán. A szükséges memória (ConcurrentRequest \* RequestSize). Az alapértelmezett érték 16.



## Category
Accessing data
