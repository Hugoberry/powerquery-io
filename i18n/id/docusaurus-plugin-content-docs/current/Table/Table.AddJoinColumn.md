---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Menggabungkan baris <code>table1</code> dengan baris <code>table2</code> berdasarkan kesamaan nilai kolom kunci yang dipilih oleh <code>key1</code> (untuk <code>table1</code>) dan <code>key2</code> (untuk <code>table2</code>). Hasilnya dimasukkan ke dalam kolom bernama <code>newColumnName</code>.Fungsi ini berperilaku sama seperti Table.Join dengan JoinKind LeftOuter kecuali hasil gabungannya diberikan dalam bentuk bersarang dan bukan diratakan.


## Examples

### Example #1 
Menambahkan kolom gabungan ke (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) bernama &#34;price/stock&#34; dari tabel (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) yang digabungkan menurut [saleID].
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
