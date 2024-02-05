---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Anger om någon av raderna i tabellen uppfyller det angivna villkoret.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Anger om någon av raderna i <code>table</code> matchar angivet <code>condition</code>. Returnerar <code>true</code> om någon av raderna matchar. Annars returneras <code>false</code>.


## Examples

### Example #1 
Kontrollera om något av radvärdena i kolumnen [a] är jämnt i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Kontrollera om något av radvärdena är [a = 1, b = 2] i tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
