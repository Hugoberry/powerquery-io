---
title: Table.Group
---

# Table.Group


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


## Remarks

Mengumpul baris `table` mengikut lajur kunci ditentukan mengikut `key`. `key` boleh jadi nama lajur tunggal, atau senarai nama lajur. Untuk setiap kumpulan, satu rekod dibina yang mengandungi lajur kunci (dan nilainya), termasuk sebarang lajur teragregat yang ditentukan mengikut `aggregatedColumns`. Secara pilihan, `groupKind` dan `comparer` mungkin juga ditentukan.  
  
Jika data telah diisih mengikut lajur kunci, satu `groupKind` GroupKind.Local boleh diberikan. Ini mungkin boleh meningkatkan prestasi pengumpulan dalam kes tertentu, kerana semua baris dengan satu set nilai kunci yang ditentukan adalah dianggap berdampingan.  
  
Apabila menghantar `comparer`, perhatikan jika ia mengendalikan kunci yang berbeza sebagai sama, baris boleh diletakkan dalam kumpulan yang kuncinya berbeza daripada kuncinya sendiri.  
  
Fungsi ini tidak menjamin tertib isihan baris yang dikembalikannya.


## Examples

### Example #1
Kumpulkan jadual menambah lajur agregat \[total\] yang mengandungi jumlah harga ("each List.Sum(\[price\])").
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
