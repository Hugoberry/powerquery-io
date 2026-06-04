---
title: Table.MaxN
---

# Table.MaxN


A legnagyobb sor(oka)t adja vissza az adott feltétel használatával.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

A(z) `table` legnagyobb sorát/sorait adja vissza a(z) `comparisonCriteria` megadása alapján. A sorok rendezése után meg kell adni a(z) `countOrCondition` paramétert az eredmény további szűréséhez. A rendezési algoritmus nem tudja garantálni a rögzített rendezési eredményt. A(z) `countOrCondition` paraméter többféle formátumú lehet:

-   Ha egy szám van megadva, a függvény egy legfeljebb `countOrCondition` elemből álló, növekvő sorrendben rendezett listát ad vissza.
-   Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő értékek listáját adja vissza. Ha egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket.


## Examples

### Example #1
Megkeresi a legnagyobb értékű sorokat a tábla \[a\] oszlopában az \[a\] > 0 feltétellel. Ügyeljen arra, hogy a sorokat a rendszer rendezi a szűrő alkalmazása előtt.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
Megkeresi a legnagyobb értékű sorokat a tábla \[a\] oszlopában a \[b\] > 0 feltétellel. Ügyeljen arra, hogy a sorokat a rendszer rendezi a szűrő alkalmazása előtt.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
