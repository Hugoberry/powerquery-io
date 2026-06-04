---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Melakukan penggabungan di antara tabel di kolom yang tersedia dan menampilkan hasil gabungan di kolom baru.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Menggabungkan baris `table1` dengan baris `table2` berdasarkan kesamaan nilai kolom kunci yang dipilih oleh `key1` (untuk `table1`) dan `key2` (untuk `table2`). Hasilnya dimasukkan ke dalam kolom bernama `newColumnName`. Fungsi ini berperilaku sama seperti Table.Join dengan JoinKind LeftOuter kecuali hasil gabungannya diberikan dalam bentuk bersarang dan bukan diratakan.


## Examples

### Example #1
Menambahkan kolom gabungan ke (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) bernama "price/stock" dari tabel (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) yang digabungkan menurut \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
