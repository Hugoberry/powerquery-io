---
title: Table.AddColumn
---

# Table.AddColumn


Aggiunge una colonna con il nome specificato. Il valore è calcolato utilizzando la funzione di selezione specificata con ogni riga accettata come input.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Remarks

Aggiunge una colonna denominata <code>newColumnName</code> alla tabella <code>table</code>. I valori della colonna sono calcolati utilizzando la funzione di selezione specificata <code>columnGenerator</code> con ogni riga accettata come input.


## Examples

### Example #1 
Aggiungere una colonna numerica denominata &#34;TotalPrice&#34; alla tabella, con ogni valore che corrisponde alla somma delle colonne [Price] e [Shipping].
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
