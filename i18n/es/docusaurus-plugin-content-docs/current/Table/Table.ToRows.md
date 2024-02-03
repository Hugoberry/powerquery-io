---
title: Table.ToRows
---

# Table.ToRows


## Description

Crea una lista de listas anidadas de valores de fila a partir de una tabla.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Crea una lista de listas anidadas a partir de la tabla <code>table</code>.  Cada elemento de lista es una lista interna que contiene los valores de fila.


## Examples

### Example #1 
Crear una lista de valores de fila a partir de la tabla.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
