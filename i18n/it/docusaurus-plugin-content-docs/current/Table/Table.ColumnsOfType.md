---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Restituisce un elenco con i nomi delle colonne corrispondenti ai tipi specificati.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Restituisce un elenco con i nomi delle colonne dalla tabella <code>table</code> corrispondenti ai tipi specificati in <code>listOfTypes</code>.


## Examples

### Example #1 
Restituire i nomi delle colonne di tipo Number.Type dalla tabella.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
