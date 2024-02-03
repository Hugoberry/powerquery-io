---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Додає стовпець із вказаним іменем стовпця. Значення обчислюється з використанням вказаної функції вибору, причому кожний рядок розглядається як вхідні дані.


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

Додає стовпець з іменем <code>newColumnName</code> у таблицю <code>table</code>. Значення для стовпця обчислюються з використанням указаної функції вибору <code>columnGenerator</code>, причому кожний рядок розглядається як вхідні дані.


## Examples

### Example #1 
Додайте до таблиці числовий стовпець &#34;ЗагальнаЦіна&#34;, кожне значення якого має бути сумою стовпців [Ціна] і [Доставка].
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
