---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Geeft aan of er rijen in de tabel aan de opgegeven voorwaarde voldoen.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Geeft aan of er rijen in de <code>table</code> aan de opgegeven <code>condition</code> voldoen. Retourneert <code>true</code> als er rijen overeenkomen en <code>false</code> als dat niet het geval is.


## Examples

### Example #1 
Bepalen of er rijwaarden in kolom [a] even waarden zijn in de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Bepalen of er rijwaarden [a = 1, b = 2] zijn in de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
