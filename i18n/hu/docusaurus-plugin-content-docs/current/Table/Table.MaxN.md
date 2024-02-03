---
title: Table.MaxN
---

# Table.MaxN


## Description

A legnagyobb sor(oka)t adja vissza az adott feltétel használatával.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

A(z) <code>table</code> legnagyobb sorát/sorait adja vissza a(z) <code>comparisonCriteria</code> megadása alapján.    A sorok rendezése után meg kell adni a(z) <code>countOrCondition</code> paramétert az eredmény további szűréséhez. A rendezési algoritmus nem tudja garantálni a rögzített rendezési eredményt. A(z) <code>countOrCondition</code> paraméter többféle formátumú lehet:    <ul>        <li> Ha egy szám van megadva, a függvény egy legfeljebb <code>countOrCondition</code> elemből álló, növekvő sorrendben rendezett listát ad vissza. </li>        <li> Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő értékek listáját adja vissza. Ha egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. </li> </ul>


## Examples

### Example #1 
Megkeresi a legnagyobb értékű sorokat a tábla [a] oszlopában az [a] &gt; 0 feltétellel. Ügyeljen arra, hogy a sorokat a rendszer rendezi a szűrő alkalmazása előtt.
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
Megkeresi a legnagyobb értékű sorokat a tábla [a] oszlopában a [b] &gt; 0 feltétellel. Ügyeljen arra, hogy a sorokat a rendszer rendezi a szűrő alkalmazása előtt.
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
