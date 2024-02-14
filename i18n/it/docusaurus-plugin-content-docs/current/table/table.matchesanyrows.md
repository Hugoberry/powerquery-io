---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Indica se una delle righe della tabella soddisfa la condizione specificata.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Indica se una delle righe in <code>table</code> corrisponde a <code>condition</code>. Restituisce <code>true</code> se una delle righe corrisponde, in caso contrario <code>false</code>.


## Examples

### Example #1 
Determinare se uno dei valori di riga nella colonna [a] si trova anche nella tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Determinare se uno dei valori di riga è [a = 1, b = 2], nella tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
