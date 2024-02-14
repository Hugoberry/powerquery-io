---
title: Table.ToRecords
---

# Table.ToRecords


Convierte una tabla en una lista de registros.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Remarks

Convierte una tabla, <code>table</code>, en una lista de registros.


## Examples

### Example #1 
Convertir la tabla en una lista de registros.
```powerquery
Table.ToRecords(
    Table.FromRows(
        {
            {1, "Bob", "123-4567"},
            {2, "Jim", "987-6543"},
            {3, "Paul", "543-7890"}
        },
        {"CustomerID", "Name", "Phone"}
    )
)
```

Result: 
```powerquery
{
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
}
```




## Category
Table.Conversions
