---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Azt jelzi, hogy a tábla bármely sora megfelel-e az adott feltételnek.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>table</code> tábla bármely sora megfelel-e az adott <code>condition</code> feltételnek. <code>true</code> értéket ad vissza, ha bármely sor megfelel, egyébként <code>false</code> értéket ad.


## Examples

### Example #1 
Annak megállapítása, hogy bármely sorérték az [a] oszlopban páros-e az &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; táblában.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
Annak megállapítása, hogy bármely sorérték [a = 1, b = 2] értékű-e a táblában &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
