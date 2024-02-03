---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Crea unha columna da lista de columnas e os valores especificados.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Crea unha táboa de tipo <code>columns</code> dunha lista <code>lists</code> que contén listas aniñadas con valores e nomes de columna.    Se algunhas columnas teñen máis valores que outras, os valores que faltan encheranse co valor predefinido, "nulo", se as columnas poden ter valores nulos.


## Examples

### Example #1 
Devolver unha táboa dunha lista de nomes de clientes dunha lista. Cada valor do elemento da lista de clientes convértese nun valor de fila, e cada lista convértese nunha columna.
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
Crear unha táboa a partir dunha lista de columnas indicada e unha lista de nomes de columna.
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
Crear unha táboa cun número diferente de columnas por fila. O valor da fila que falta é nulo.
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
