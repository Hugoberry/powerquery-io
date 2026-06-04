---
title: Table.Buffer
---

# Table.Buffer


A memóriában pufferel egy táblát, elkülönítve azt a külső módosításoktól a kiértékelés során.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

A memóriában pufferel egy táblát, elkülönítve azt a külső módosításoktól a kiértékelés során. A pufferelés nem kötelező. Kényszeríti a skaláris cellaértékek kiértékelését, de a nem skaláris értékeket (rekordokat, listákat, táblázatokat stb.) adott állapotban hagyja.

-   `table`: A memóriában pufferelendő tábla.
-   `options`: (Nem kötelező) A következő beállításrekordértékek használhatók:
    -   `BufferMode`: A végrehajtandó pufferelési típust leíró puffermód. Ez a beállítás lehet `BufferMode.Eager` vagy `BufferMode.Delayed`.

A függvény használata felgyorsíthatja a lekérdezéseket, de nem biztos, hogy így lesz. Bizonyos esetekben a lekérdezések lassabban futhatnak az összes adat beolvasásának és memóriában való tárolásának hozzáadott költsége, valamint azon tény miatt, hogy a pufferelés megakadályozza az alsóbb rétegbeli átadást. Ha az adatokat nem kell pufferelni, csak meg szeretné akadályozni az alsóbb rétegbeli átadást, használja helyette a `Table.StopFolding` lehetőséget.


## Examples

### Example #1
Töltse be egy SQL-tábla összes sorát a memóriába, hogy az alsóbb rétegbeli műveletek többé ne tudják lekérdezni az SQL-kiszolgálót.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
