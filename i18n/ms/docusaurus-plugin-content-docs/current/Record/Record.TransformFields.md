---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Mengembalikan rekod selepas menggunakan transformasi yang ditentukan.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Mengembalikan rekod selepas menggunakan transformasi yang ditentukan dalam senarai <code>transformOperations</code> pada <code>record</code>.    Satu atau lebih medan boleh ditransformasikan pada masa tertentu.       <div>Dalam kes medan tunggal ditransformasikan, <code>transformOperations</code> dijangka menjadi senarai dengan dua item. Item pertama dalam <code>transformOperations</code> menentukan nama medan dan item kedua dalam <code>transformOperations</code> menentukan fungsi untuk digunakan bagi transformasi. Contohnya, <code>\{"Quantity", Number.FromText}</code></div>      <div>Dalam keadaan berbilang medan ditransformasikan, <code>transformOperations</code> dijangka menjadi senarai untuk senarai, yang mana setiap senarai dalaman ialah pasangan nama medan dan operasi transformasi. Contohnya, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Menukarkan medan &#34;Harga&#34; kepada nombor.
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
Menukarkan medan &#34;OrderID&#34; dan &#34;Harga&#34; kepada nombor.
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
