---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Trasforma le righe della tabella utilizzando la funzione di trasformazione specificata.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Crea un <code>elenco</code> applicando l'operazione <code>transform</code> a ogni riga in <code>table</code>.


## Examples

### Example #1 
Trasformare le righe di una tabella in un elenco di numeri.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Trasformare le righe di una tabella numerica in record testuali.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
