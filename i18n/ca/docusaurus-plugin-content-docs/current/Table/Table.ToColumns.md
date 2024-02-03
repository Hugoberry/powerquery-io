---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Crea una llista de llistes imbricades de valors de columna d&#39;una taula.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Crea una llista de llistes imbricades de la taula <code>table</code>.  Cada element de llista és una llista interna que conté els valors de columna.


## Examples

### Example #1 
Crea una llista de valors de columna de la taula.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
