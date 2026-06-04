---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


A megadott függvényt használva átalakítja az oszlopneveket.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

A megadott `nameGenerator` függvényt használva átalakítja az oszlopneveket. Érvényes beállítások:

A `MaxLength` az új oszlopnevek maximális hosszát határozza meg. Ha a megadott függvény hosszabb oszlopnevet eredményez, a rendszer levág a név hosszából.

A `Comparer` az összehasonlítást szabályozza az új oszlopnevek létrehozása során. Az összehasonlítók a kis- és nagybetűket meg nem különböztető, illetve kulturális környezetet és területi beállítást figyelembe vevő összehasonlítások megadására használhatók.

A következő beépített összehasonlítók érhetők el a képletnyelvben:

-   `Comparer.Ordinal`: Pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.OrdinalIgnoreCase`: Kis- és nagybetűk megkülönböztetése nélküli, pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.FromCulture`: Kulturális környezetet figyelembe vevő összehasonlítás végrehajtására szolgál.


## Examples

### Example #1
A következő karakter eltávolítása az oszlopnevekből: `#(tab)`
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Oszlopnevek átalakítása 6 karakter hosszúságú nevekké, amelyek nem tesznek különbséget kis- és nagybetűk között.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
