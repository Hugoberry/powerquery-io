---
title: Table.Group
---

# Table.Group


## Description

Menghimpunkan baris dalam jadual yang mempunyai kunci yang sama.


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

Mengumpul baris <code>table</code> mengikut lajur kunci ditentukan mengikut <code>key</code>. <code>key</code> boleh jadi nama lajur tunggal, atau senarai nama lajur.    Untuk setiap kumpulan, satu rekod dibina yang mengandungi lajur kunci (dan nilainya), termasuk sebarang lajur teragregat yang ditentukan mengikut <code>aggregatedColumns</code>.    Secara pilihan, <code>groupKind</code> dan <code>comparer</code> mungkin juga ditentukan.<br />    <br />    Jika data telah diisih mengikut lajur kunci, satu <code>groupKind</code> GroupKind.Local boleh diberikan. Ini mungkin boleh meningkatkan prestasi pengumpulan dalam kes tertentu,    kerana semua baris dengan satu set nilai kunci yang ditentukan adalah dianggap berdampingan.<br />    <br />    Apabila menghantar <code>comparer</code>, perhatikan jika ia mengendalikan kunci yang berbeza sebagai sama, baris boleh diletakkan dalam kumpulan yang kuncinya berbeza daripada kuncinya sendiri.<br />    <br />    Fungsi ini tidak menjamin tertib isihan baris yang dikembalikannya.  


## Examples

### Example #1 
Kumpulkan jadual menambah lajur agregat [total] yang mengandungi jumlah harga (&#34;each List.Sum([price])&#34;).
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
