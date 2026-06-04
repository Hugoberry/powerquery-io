---
title: Record.TransformFields
---

# Record.TransformFields


Menghasilkan data setelah menerapkan transformasi yang ditetapkan.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Mengembalikan data setelah menerapkan perubahan yang ditetapkan dalam daftar `transformOperations` menjadi `record`. Satu atau beberapa bidang dapat diubah pada satu waktu tertentu.

Jika satu bidang yang diubah, `transformOperations` diperkirakan akan menjadi daftar dengan dua item. Item pertama dalam `transformOperations` menetapkan nama bidang, dan item kedua dalam `transformOperations` menetapkan fungsi yang akan digunakan untuk transformasi. Misalnya, `{"Quantity", Number.FromText}`

Jika beberapa bidang ditransformasi, `transformOperations` diperkirakan akan menjadi daftar berisi daftar dengan daftar dalam yang berupa pasangan nama bidang dan operasi transformasi. Misalnya, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Mengonversi bidang "Price" menjadi angka.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2
Mengonversi bidang "OrderID" dan "Price" menjadi angka.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
