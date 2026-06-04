---
title: SapHana.Database
---

# SapHana.Database


Egy SAP HANA-adatbázis csomagjait adja vissza.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Többdimenziós csomagok tábláját adja vissza a(z) `server` SAP HANA-adatbázisból. Megadható egy választható rekordparaméter (`options`) a következő beállítások meghatározásához:

-   `Query` : Adatok lekérésére használt natív SQL-lekérdezés. Ha a lekérdezés több találathalmazt is eredményez, a rendszer csak az elsőt adja vissza.
-   `Distribution` : Egy SapHanaDistribution, amely a „Distribution” tulajdonság értékét adja meg a kapcsolati sztringben. Az utasítás-útvonaltervezés egy olyan módszer, amellyel ki lehet értékelni egy elosztott rendszer megfelelő kiszolgáló-csomópontját az utasítás végrehajtása előtt. Az alapértelmezett érték a SapHanaDistribution.All.
-   `Implementation` : Megadja a használandó SAP HANA összekötő implementációját.
-   `EnableColumnBinding` : Az adatok lekérésekor egy SAP HANA eredményhalmaz oszlopaihoz köti a változókat. A valamivel magasabb memóriakihasználtság árán esetleges javulás érhető el a teljesítményben. Az alapértelmezett érték hamis.
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték 15 másodperc.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.



## Category
Accessing data
