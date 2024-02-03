---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Nurodoma, ar visos eilutės lentelėje atitinka nurodytą sąlygą.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Nurodoma, ar visos <code>table</code> eilutės atitinka nurodytą <code>condition</code>. Pateikiama <code>true</code>, jei visos eilutės atitinka; priešingu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar visos stulpelio [a] eilučių reikšmės lentelėje yra lyginės.
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
Sužinokite, ar visos eilučių reikšmės lentelėje &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; yra [a = 1, b = 2].
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
