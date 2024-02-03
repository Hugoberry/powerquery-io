---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Indica si alguna de les files de la taula compleix la condició donada.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Indica si qualsevol de les files de la <code>table</code> coincideixen amb la <code>condition</code> donada. Retorna <code>true</code> si alguna de les files coincideix i <code>false</code> en cas contrari.


## Examples

### Example #1 
Determina si algun dels valors de files de la columna [a] és parell a la taula &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Determina si algun dels valors de files de la columna [a = 1, b = 2] és parell a la taula &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
