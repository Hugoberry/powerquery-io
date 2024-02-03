---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Menjalankan sambungan antara jadual pada lajur yang dibekalkan dan menghasilkan hasil sambungan dalam lajur baru.


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

Sambungkan baris <code>table1</code> dengan baris <code>table2</code> berdasarkan kualiti nilai bagi lajur kunci yang dipilih oleh <code>key1</code> (untuk <code>table1</code>) dan <code>key2</code> (untuk <code>table2</code>). Hasil dimasukkan ke dalam lajur bernama <code>newColumnName</code>.Fungsi ini berkelakuan serupa dengan Table.Join dengan JoinKind bagi LeftOuter kecuali hasil sambungan dipersembahkan dalam cara tersarang berbanding diratakan.


## Examples

### Example #1 
Tambah lajur sambungan pada (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) bernama &#34;price/stock&#34; daripada jadual (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) joined on [saleID].
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
