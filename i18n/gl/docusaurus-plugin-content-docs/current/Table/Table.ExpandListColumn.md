---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Dada unha columna de listas nunha táboa, crear unha copia dunha fila para cada valor da lista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Dada unha <code>table</code>, onde unha <code>column</code> é unha lista de valores, divide a lista nunha fila para cada valor da lista. Os valores das outras columnas duplícanse en cada nova fila creada.


## Examples

### Example #1 
Dividir a columna da lista [Name] na táboa.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
