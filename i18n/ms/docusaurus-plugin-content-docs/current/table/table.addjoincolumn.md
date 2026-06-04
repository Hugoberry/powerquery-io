---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


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


## Remarks

Sambungkan baris `table1` dengan baris `table2` berdasarkan kualiti nilai bagi lajur kunci yang dipilih oleh `key1` (untuk `table1`) dan `key2` (untuk `table2`). Hasil dimasukkan ke dalam lajur bernama `newColumnName`. Fungsi ini berkelakuan serupa dengan Table.Join dengan JoinKind bagi LeftOuter kecuali hasil sambungan dipersembahkan dalam cara tersarang berbanding diratakan.


## Examples

### Example #1
Tambah lajur sambungan pada (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) bernama "price/stock" daripada jadual (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) joined on \[saleID\].
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
