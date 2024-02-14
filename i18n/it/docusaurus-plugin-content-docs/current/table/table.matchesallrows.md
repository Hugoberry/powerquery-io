---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Indica se tutte le righe della tabella soddisfano la condizione specificata.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica se tutte le righe in <code>table</code> corrispondono a <code>condition</code>. Restituisce <code>true</code> se tutte le righe corrispondono, in caso contrario <code>false</code>.


## Examples

### Example #1 
Determinare se tutti i valori di riga nella colonna [a] sono pari nella tabella.
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
Trovare se tutti valori di riga sono [a = 1, b = 2], nella tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
