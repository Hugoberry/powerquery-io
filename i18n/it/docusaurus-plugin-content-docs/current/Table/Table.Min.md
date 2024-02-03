---
title: Table.Min
---

# Table.Min


## Description

Restituisce la riga più piccola o un valore predefinito mediante i criteri specificati.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Restituisce la riga più piccola in <code>table</code>, dato <code>comparisonCriteria</code>. Se la tabella è vuota, verrà restituito il valore facoltativo <code>default</code>.


## Examples

### Example #1 
Trovare la riga con il valore più grande nella colonna [a] nella tabella.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Trovare la riga con il valore più piccolo nella colonna [a] nella tabella. Restituire -1 se vuota.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
