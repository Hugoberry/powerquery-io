---
title: Table.FromRows
---

# Table.FromRows


Crea una tabla a partir de una lista de valores de fila y columnas opcionales.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Crea una tabla a partir de la lista `rows` en la que cada elemento de esta es una lista interna que contiene los valores de columna para una sola fila. Se ha podido proporcionar una lista opcional de nombres de columna, un tipo de tabla o un número de columnas para `columns`.


## Examples

### Example #1
Devolver una tabla con la columna \[CustomerID\] con los valores \{1, 2\}, columna \[Name\] con los valores \{"Bob", "Jim"\}, y la columna \[Phone\] con los valores \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Devolver una tabla con la columna \[CustomerID\] con los valores \{1, 2\}, columna \[Name\] con los valores \{"Bob", "Jim"\} y la columna \[Phone\] con los valores \{"123-4567", "987-6543"\}, donde \[CustomerID\] es el tipo de número, y \[Name\] y \[Phone\] son tipos de texto.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
