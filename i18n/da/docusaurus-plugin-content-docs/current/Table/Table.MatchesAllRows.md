---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Angiver, om alle rækkerne i tabellen opfylder den angivne betingelse.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Angiver, om alle rækkerne i tabellen <code>table</code> svarer til den angivne <code>condition</code>. Returnerer <code>true</code>, hvis alle rækkerne matcher. Ellers returneres <code>false</code>.


## Examples

### Example #1 
Find ud af, om alle rækkeværdierne i kolonne [a] også er i tabellen.
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
Find ud af, om alle rækkeværdierne er [a = 1, b = 2] i tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
