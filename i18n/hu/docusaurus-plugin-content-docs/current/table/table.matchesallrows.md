---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Azt jelzi, hogy a tábla minden sora megfelel-e az adott feltételnek.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Azt jelzi, hogy a(z) `table` tábla minden sora megfelel-e az adott `condition` feltételnek. `true` értéket ad vissza, ha minden sor megfelel, egyébként `false` értéket ad.


## Examples

### Example #1
Megállapítja, hogy az összes sorérték páros-e a tábla \[a\] oszlopában.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Annak eldöntése, hogy a sorértékek \[a = 1, b = 2\] értékűek-e a(z) `({[a = 1, b = 2], [a = 3, b = 4]})` táblában.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
