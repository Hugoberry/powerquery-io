---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Crea una tabla a partir de una lista de columnas y de valores especificados.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Crea una tabla de tipo <code>columns</code> a partir de una lista <code>lists</code> que contiene listas anidadas con los nombres de columna y los valores.    Si algunas columnas tienen más valores que otras, los valores que faltan se llenarán con el valor predeterminado ("null") si las columnas admiten valores "null".


## Examples

### Example #1 
Devolver una tabla de una lista de nombres de clientes en una lista. Cada valor del elemento de la lista de clientes se convierte en un valor de fila y cada lista se convierte en una columna.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Crear una tabla a partir de una lista dada de columnas y de una lista de nombres de columna.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Cree una tabla con un número diferente de columnas por fila. El valor de la fila que falta es nulo.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
