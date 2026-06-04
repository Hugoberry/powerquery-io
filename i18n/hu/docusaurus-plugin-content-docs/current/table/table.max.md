---
title: Table.Max
---

# Table.Max


A legnagyobb sort vagy egy adott alapértelmezett értéket ad vissza az adott feltétel használatával.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

A legnagyobb sort adja vissza a(z) `table` táblából az adott `comparisonCriteria` feltétel használatával. Ha a tábla üres, a nem kötelező `default` értéket adja vissza.


## Examples

### Example #1
A legnagyobb értékű sorok megkeresése a(z) \[a\] oszlopban a(z) `({[a = 2, b = 4], [a = 6, b = 8]})` táblában.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
A legnagyobb értékű sorok megkeresése a(z) \[a\] oszlopban a(z) `({})` táblában, illetve -1 érték visszaadása üres lista esetén.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
