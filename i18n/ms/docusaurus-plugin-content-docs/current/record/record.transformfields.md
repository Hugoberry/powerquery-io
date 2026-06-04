---
title: Record.TransformFields
---

# Record.TransformFields


Mengembalikan rekod selepas menggunakan transformasi yang ditentukan.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Mengembalikan rekod selepas menggunakan transformasi yang ditentukan dalam senarai `transformOperations` pada `record`. Satu atau lebih medan boleh ditransformasikan pada masa tertentu.

Dalam kes medan tunggal ditransformasikan, `transformOperations` dijangka menjadi senarai dengan dua item. Item pertama dalam `transformOperations` menentukan nama medan dan item kedua dalam `transformOperations` menentukan fungsi untuk digunakan bagi transformasi. Contohnya, `{"Quantity", Number.FromText}`

Dalam keadaan berbilang medan ditransformasikan, `transformOperations` dijangka menjadi senarai untuk senarai, yang mana setiap senarai dalaman ialah pasangan nama medan dan operasi transformasi. Contohnya, `{{"Quantity",Number.FromText},{"UnitPrice", Number.FromText}}`


## Examples

### Example #1
Menukarkan medan "Harga" kepada nombor.
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
Menukarkan medan "OrderID" dan "Harga" kepada nombor.
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
