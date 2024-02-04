---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Adiciona uma coluna com o nome especificado. O valor é calculado utilizando a função de seleção especificada em cada linha tomada como entrada.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

Adiciona uma coluna chamada <code>newColumnName</code> à tabela <code>table</code>. Os valores da coluna são calculado utilizando a função de seleção especificada <code>columnGenerator</code> em cada linha tomada como entrada.


## Examples

### Example #1 
Adicionar uma coluna de números com o nome &#34;Preço Total&#34; à tabela, sendo que cada valor é a soma das colunas [Preço] e [Envio].
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
