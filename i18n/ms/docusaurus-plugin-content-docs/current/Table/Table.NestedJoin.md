---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Menjalankan sambungan antara jadual pada lajur yang dibekalkan dan menghasilkan hasil sambungan dalam lajur baru.


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

Mencantumkan baris <code>table1</code> dengan baris <code>table2</code> berdasarkan kesamaan nilai lajur utama yang dipilih oleh <code>key1</code> (untuk <code>table1</code>) dan <code>key2</code> (untuk <code>table2</code>). Hasil dimasukkan ke dalam lajur bernama <code>newColumnName</code>.<br />Pilihan <code>joinKind</code> menentukan jenis cantuman untuk dilakukan. Secara lalai, cantuman luar kiri dilakukan jika <code>joinKind</code> tidak ditentukan.<br />Set pilihan <code>keyEqualityComparers</code> mungkin disertakan untuk menentukan cara membanding lajur kunci. Ciri ini pada masa ini bertujuan untuk kegunaan dalaman sahaja.<br />  


## Examples

### Example #1 
Cantum dua jadual menggunakan lajur kunci tunggal.
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
