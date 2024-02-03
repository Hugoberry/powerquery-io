---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Baixa de nivel as cabeceiras de columna á primeira fila de valores.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Baixa de nivel as cabeceiras de columna (p. ex., nomes de columna) á primeira fila de valores. Os nomes de columna predefinidos son "Column1", "Column2", etc.


## Examples

### Example #1 
Baixar de nivel a primeira fila de valores da táboa.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
