---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Menghasilkan data setelah menerapkan transformasi yang ditetapkan.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Mengembalikan data setelah menerapkan perubahan yang ditetapkan dalam daftar <code>transformOperations</code> menjadi <code>record</code>.    Satu atau beberapa bidang dapat diubah pada satu waktu tertentu.      <div>Jika satu bidang yang diubah, <code>transformOperations</code> diperkirakan akan menjadi daftar dengan dua item. Item pertama dalam <code>transformOperations</code> menetapkan nama bidang, dan item kedua dalam <code>transformOperations</code> menetapkan fungsi yang akan digunakan untuk transformasi. Misalnya, <code>\{"Quantity", Number.FromText}</code></div>      <div>Jika beberapa bidang ditransformasi, <code>transformOperations</code> diperkirakan akan menjadi daftar berisi daftar dengan daftar dalam yang berupa pasangan nama bidang dan operasi transformasi. Misalnya, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Mengonversi bidang &#34;Price&#34; menjadi angka.
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
Mengonversi bidang &#34;OrderID&#34; dan &#34;Price&#34; menjadi angka.
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
