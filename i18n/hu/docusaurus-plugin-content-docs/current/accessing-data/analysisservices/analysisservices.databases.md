---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Az adott gazdagépen található Analysis Services-adatbázisokat adja vissza.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

A(z) `server` Analysis Services-példányon található adatbázisokat adja vissza. Megadható egy választható rekordparaméter (`options`) további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:

-   `TypedMeasureColumns` : Egy logikai érték, amely azt határozza meg, hogy a többdimenziós vagy táblázatos modellben megadott típusok legyenek-e használva a hozzáadott mértékoszlopok típusaiként. Ha az értéke false (hamis), minden mértékoszlophoz a „number” típus lesz alkalmazva. A beállítás alapértelmezett értéke a false.
-   `Culture` : Az adatok kulturális környezetét meghatározó név, amely megfelel a kapcsolati sztring „Területibeállítás-azonosító” tulajdonságának.
-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ.
-   `ConnectionTimeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.
-   `SubQueries` : Egy szám (0, 1 vagy 2), amely meghatározza a „SubQueries” (Segédlekérdezések) tulajdonság értékét a kapcsolati sztringben. Ez az érték vezérli a részkijelölések és részkockák számított elemeinek viselkedését. (Az alapértelmezett érték a 2).
-   `Implementation`



## Category
Accessing data
