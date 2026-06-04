---
title: Table.FromRecords
---

# Table.FromRecords


Mengkonversi daftar data menjadi tabel.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Mengonversi daftar rekaman tertentu ke dalam tabel.

-   `records`: Daftar rekaman yang akan dikonversi ke tabel.
-   `columns`: (Opsional) Daftar nama kolom tabel, atau tipe tabel.
-   `missingField`: (Opsional) Menentukan cara menangani bidang yang tidak adad dalam satu baris. Gunakan salah satu nilai berikut:
    -   `MissingField.Error`: Bidang yang tidak ada menghasilkan kesalahan (default).
    -   `MissingField.UseNull`: Setiap bidang yang tidak ada disertakan sebagai nilai `null`.
      
    Menggunakan `MissingField.Ignore` dalam parameter ini akan menghasilkan kesalahan.


## Examples

### Example #1
Membuat tabel dari catatan, menggunakan nama bidang catatan sebagai nama kolom.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Buat tabel dari catatan dengan kolom yang diketikkan dan memilih kolom angka.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Buat tabel yang berisi nama depan, inisial tengah, dan nama belakang pelanggan dari rekaman yang ditentukan. Jika salah satu nilai tidak ada, ganti nilai dengan `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
