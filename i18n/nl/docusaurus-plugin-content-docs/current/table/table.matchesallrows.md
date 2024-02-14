---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Geeft aan of alle rijen in de tabel aan de opgegeven voorwaarde voldoen.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Geeft aan of alle rijen in de <code>table</code> aan de opgegeven <code>condition</code> voldoen. Retourneert <code>true</code> als alle rijen overeenkomen en <code>false</code> als dat niet het geval is.


## Examples

### Example #1 
Bepalen of alle rijwaarden in kolom [a] even waarden zijn in de tabel.
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
Uitzoeken of alle rijwaarden [a = 1, b = 2] zijn in de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
