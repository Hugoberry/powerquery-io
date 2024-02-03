---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Belirtilen ada sahip bir sütun ekler. Değer, her satır girdi olarak alınarak belirtilen seçim işlevi kullanılarak hesaplanır.


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

<code>newColumnName</code> adlı bir sütunu <code>table</code> tablosuna ekler. Sütun değerleri, her satır girdi olarak alınarak belirtilen <code>columnGenerator</code> seçim işlevi kullanılarak hesaplanır.


## Examples

### Example #1 
Tabloya, her bir değer [Fiyat] ve [Gönderim] sütunlarının toplamı olacak şekilde &#34;Toplam Fiyat&#34; adlı bir sayı sütunu ekler.
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
