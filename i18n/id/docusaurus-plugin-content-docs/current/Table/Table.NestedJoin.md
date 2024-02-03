---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Menggabungkan baris <code>table1</code> dengan baris <code>table2</code> berdasarkan kesamaan nilai kolom kunci yang dipilih oleh <code>key1</code> (untuk <code>table1</code>) dan <code>key2</code> (untuk <code>table2</code>). Hasilnya dimasukkan ke dalam kolom bernama <code>newColumnName</code>.<br /><code>joinKind</code> opsional menentukan jenis penggabungan yang akan dilakukan. Secara default, gabungan kiri luar akan dilakukan jika <code>joinKind</code> tidak ditetapkan<br />Kumpulan opsional <code>keyEqualityComparers</code> dapat disertakan untuk menentukan cara membandingkan kolom kunci. Saat ini, fitur ini ditujukan untuk penggunaan internal saja.<br /> 


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
