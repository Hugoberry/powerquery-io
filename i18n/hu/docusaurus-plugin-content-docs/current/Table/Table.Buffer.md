---
title: Table.Buffer
---

# Table.Buffer


## Description

A memóriában pufferel egy táblát, elkülönítve azt a külső módosításoktól a kiértékelés során.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Pufferel egy táblát a memóriában, és elkülöníti azt a külső változásoktól a kiértékelés során.    A pufferelés egyszintű. A skaláris cellaértékek kiértékelését kényszeríti, de a nem skaláris értékeket (rekordokat, listákat, táblák stb.) ugyanúgy hagyja.    <br />    <br />    Figyeljen arra, hogy a függvény használata felgyorsíthatja vagy éppen nem gyorsíthatja fel a lekérdezéseket. Bizonyos esetekben lelassíthatja a lekérdezéseket a hozzáadott     költség amiatt, ami az összes adat beolvasásával és memóriában történő tárolásával jár, ugyanúgy mint az, hogy a pufferelés megakadályozza az alsóbb rétegbeli átadást. Ha az adatokat nem kell    pufferelni, hanem csak az alsóbb rétegbeli átadást szeretné megakadályozni, használja helyette a következőt: <code>Table.StopFolding</code>.


## Examples

### Example #1 
Töltse be egy SQL-tábla összes sorát a memóriába, hogy az alsóbb rétegbeli műveletek többé ne tudják lekérdezni az SQL-kiszolgálót.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
