---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Devolve unha táboa só coas filas da táboa de entrada que conteñen un erro en polo menos unha das celas. Especifícase unha lista de columnas, entón só se inspeccionan á busca de erros as celas nas columnas especificadas.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Devolve unha táboa só coas filas da táboa de entrada que conteñen un erro en polo menos unha das celas. Especifícase unha lista de columnas, entón só se inspeccionan á busca de erros as celas nas columnas especificadas.


## Examples

### Example #1 
Seleccione nomes de clientes con erros na súas filas.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
