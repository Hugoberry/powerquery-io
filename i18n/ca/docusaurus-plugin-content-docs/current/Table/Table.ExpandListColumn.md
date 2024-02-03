---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Donada una columna de llistes d&#39;una taula, crea una còpia d&#39;una fila per a cada valor de la seva llista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Donat un element <code>table</code>, on <code>column</code> és una llista de valors, divideix la llista en una fila per a cada valor. Els valors d'altres columnes es dupliquen a cada fila nova que es crea.


## Examples

### Example #1 
Divideix la columna de la llista [Name] de la taula.
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
