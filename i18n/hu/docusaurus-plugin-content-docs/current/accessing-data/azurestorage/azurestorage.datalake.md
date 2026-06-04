---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Visszaad egy navigációs táblát, amely az Azure Data Lake Storage-ban lévő megadott tárolóban és annak almappáiban található dokumentumokat tartalmazza.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Visszaad egy navigációs táblát, amely egy Azure Data Lake Storage-fájlrendszerben lévő, `endpoint` URL-címen elérhető fiók megadott tárolójában és annak almappáiban található dokumentumokat tartalmazza. A(z) `options` megadásával vezérelhetők a következő beállítások:

-   `BlockSize` : Az adatfogyasztóra való várakozás előtt beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `RequestSize` : A kiszolgálóra egyetlen HTTP-kérelemben beolvasni kívánt bájtok száma. Az alapértelmezett érték 4 MB.
-   `ConcurrentRequests` : A ConcurrentRequests beállítás az adatok gyorsabb letöltését támogatja a párhuzamosan végzett kérelmek számának megadásával, a memória kihasználtságának árán. A szükséges memória (ConcurrentRequest \* RequestSize). Az alapértelmezett érték 16.
-   `HierarchicalNavigation` : Logikai (igaz/hamis) érték, amely meghatározza, hogy a rendszer a fájlokat egy faszerű könyvtárnézetben adja-e vissza vagy egy egyszerű listában. Az alapértelmezett érték a hamis.



## Category
Accessing data
