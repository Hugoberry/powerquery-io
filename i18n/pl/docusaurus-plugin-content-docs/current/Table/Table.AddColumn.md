---
title: Table.AddColumn
---

# Table.AddColumn


Dodaje kolumnę o określonej nazwie. Wartość jest obliczana przy użyciu określonej funkcji wyboru wykonywanej na każdym wierszu wejściowym.


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

Dodaje kolumnę o nazwie <code>newColumnName</code> do tabeli <code>table</code>. Wartości kolumny są obliczane przy użyciu określonej funkcji wyboru <code>columnGenerator</code> wykonywanej na każdym wierszu wejściowym.


## Examples

### Example #1 
Dodaj kolumnę liczb o nazwie „ TotalPrice” do tabeli, gdzie każda wartość jest sumą kolumn [Price] i [Shipping].
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
