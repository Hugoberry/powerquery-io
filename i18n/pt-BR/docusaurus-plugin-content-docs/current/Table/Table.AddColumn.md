---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Adiciona uma coluna com o nome especificado. O valor é computado usando a função de seleção especificada com cada linha assumida como entrada.


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

Adiciona uma coluna denominada <code>newColumnName</code> à tabela <code>table</code>. Os valores da coluna são computados por meio da função de seleção especificada <code>columnGenerator</code> com cada linha assumida como entrada.


## Examples

### Example #1 
Adicione uma coluna numérica chamada &#34;TotalPrice&#34; à tabela, com cada valor sendo a soma das colunas [Preço] e [Remessa].
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
