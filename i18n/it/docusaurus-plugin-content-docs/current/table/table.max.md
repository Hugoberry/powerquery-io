---
title: Table.Max
---

# Table.Max


Restituisce la riga più grande o il valore predefinito mediante i criteri specificati.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Restituisce la riga più grande in `table`, dato `comparisonCriteria`. Se la tabella è vuota, verrà restituito il valore facoltativo `default`.


## Examples

### Example #1
Trovare la riga con il valore più grande nella colonna \[a\] della tabella `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Trovare la riga con il valore più grande nella colonna \[a\] della tabella `({})`. Restituire -1 se vuota.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
