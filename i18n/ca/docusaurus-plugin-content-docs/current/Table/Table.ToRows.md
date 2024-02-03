---
title: Table.ToRows
---

# Table.ToRows


## Description

Crea una llista de llistes imbricades de valors de fila d&#39;una taula.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Crea una llista de llistes imbricades de la taula <code>table</code>.  Cada element de llista és una llista interna que conté els valors de fila.


## Examples

### Example #1 
Crea una llista de valors de fila de la taula.
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
