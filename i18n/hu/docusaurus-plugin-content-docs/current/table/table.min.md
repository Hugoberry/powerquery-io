---
title: Table.Min
---

# Table.Min


A legkisebb sort vagy egy adott alapértelmezett értéket ad vissza az adott feltétel használatával.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

A legkisebb sort adja vissza a(z) `table` táblából az adott `comparisonCriteria` feltétel használatával. Ha a tábla üres, a nem kötelező `default` értéket adja vissza.


## Examples

### Example #1
Megkeresi a legkisebb értékű sorokat a tábla \[a\] oszlopában.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2
Megkeresi a legkisebb értékű sorokat a tábla \[a\] oszlopában, illetve -1 értéket ad vissza üres lista esetén.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
