---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Nurodoma, ar kurios nors eilutės lentelėje atitinka nurodytą sąlygą.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Nurodoma, ar kurios nors <code>table</code> eilutės atitinka nurodytą <code>condition</code>. Pateikiama <code>true</code>, jei kurios nors eilutės atitinka; priešingu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar kurios nors stulpelio [a] eilučių reikšmės lentelėje &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; yra lyginės.
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
Nustatykite, ar kurios nors eilučių reikšmės lentelėje &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; yra [a = 1, b = 2].
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
