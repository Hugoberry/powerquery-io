---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Ilmaisee, täyttävätkö taulukon kaikki rivit annetun ehdon.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Ilmaisee, täyttävätkö kohteen <code>table</code> kaikki rivit annetun ehdon <code>condition</code>. Palauttaa arvon <code>true</code>, jos kaikki rivit täsmäävät, ja muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Selvitä, ovatko kaikki sarakkeen [a] rivien arvot parillisia taulukossa.
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
Selvitä, ovatko kaikki rivien arvot [a = 1, b = 2] taulukossa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
