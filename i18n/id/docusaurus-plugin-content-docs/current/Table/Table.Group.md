---
title: Table.Group
---

# Table.Group


## Description

Mengelompokkan baris dalam tabel yang memiliki kunci sama.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Mengelompokkan baris <code>table</code> berdasarkan kolom kunci yang ditentukan oleh <code>key</code>. <code>key</code> dapat berupa nama kolom tunggal, atau daftar nama kolom.    Untuk tiap grup, catatan dikonstruksi berisi kolom kunci (dan nilainya), bersama dengan kolom agregat yang ditentukan oleh <code>aggregatedColumns</code>.    Secara opsional, <code>groupKind</code> dan <code>comparer</code> juga dapat ditentukan.<br />    <br />    Jika data sudah diurutkan berdasarkan kolom kunci, <code>groupKind</code> dari GroupKind.Local dapat diberikan. Hal ini dapat meningkatkan performa pengelompokan dalam kasus tertentu,    karena semua baris dengan rangkaian nilai kunci yang diberikan diasumsikan berdekatan.<br />    <br />    Saat meneruskan <code>comparer</code>, perhatikan bahwa jika hal tersebut memperlakukan kunci yang berbeda secara setara, baris dapat ditempatkan dalam grup dengan kunci yang berbeda dari kuncinya sendiri.<br />    <br />    Fungsi ini tidak menjamin pengurutan baris yang akan dihasilkan.  


## Examples

### Example #1 
Mengelompokkan tabel dengan menambahkan kolom agregat [total] dengan berisi jumlah harga (&#34;tiap List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
