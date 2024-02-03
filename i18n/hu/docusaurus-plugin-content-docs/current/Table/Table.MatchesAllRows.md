---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Azt jelzi, hogy a tábla minden sora megfelel-e az adott feltételnek.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>table</code> tábla minden sora megfelel-e az adott <code>condition</code> feltételnek. <code>true</code> értéket ad vissza, ha minden sor megfelel, egyébként <code>false</code> értéket ad.


## Examples

### Example #1 
Megállapítja, hogy az összes sorérték páros-e a tábla [a] oszlopában.
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
Annak eldöntése, hogy a sorértékek [a = 1, b = 2] értékűek-e a(z) &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; táblában.
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
