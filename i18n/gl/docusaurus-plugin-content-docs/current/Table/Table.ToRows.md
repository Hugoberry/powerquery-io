---
title: Table.ToRows
---

# Table.ToRows


## Description

Crea unha lista de listas aniñadas de valores de fila dunha táboa.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Crea unha lista de listas aniñadas da táboa, <code>table</code>.  Cada elemento da lista é unha lista interna que contén os valores de fila.


## Examples

### Example #1 
Crear unha lista de valores de fila da táboa.
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
