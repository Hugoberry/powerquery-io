---
title: Table.NestedJoin
---

# Table.NestedJoin


Melakukan penggabungan di antara tabel di kolom yang tersedia dan menampilkan hasil gabungan di kolom baru.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Menggabungkan baris `table1` dengan baris `table2` berdasarkan kesamaan nilai kolom kunci yang dipilih oleh `key1` (untuk `table1`) dan `key2` (untuk `table2`). Hasilnya dimasukkan ke dalam kolom bernama `newColumnName`.

`joinKind` opsional menentukan jenis penggabungan yang akan dilakukan. Secara default, gabungan kiri luar akan dilakukan jika `joinKind` tidak ditetapkan

Kumpulan opsional `keyEqualityComparers` dapat disertakan untuk menentukan cara membandingkan kolom kunci. Saat ini, fitur ini ditujukan untuk penggunaan internal saja.


## Examples

### Example #1
Gabungkan dua tabel menggunakan satu kolom kunci.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
