---
title: Table.RenameColumns
---

# Table.RenameColumns


Menerapkan perubahan nama formulir \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Menjalankan perubahan nama tertentu ke kolom dalam tabel `table`. Operasi penggantian `renames` terdiri atas daftar dua nilai, yakni nama kolom lama dan baru, yang tersedia dalam daftar. Jika kolom tidak ada, kesalahan akan muncul kecuali parameter opsional `missingField` menentukan alternatif (misalnya `MissingField.UseNull` atau `MissingField.Ignore`).


## Examples

### Example #1
Mengganti nama kolom "CustomerNum" dengan "CustomerID" dalam tabel.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Mengganti nama kolom "CustomerNum" dengan "CustomerID" dan "PhoneNum" dengan "Phone" dalam tabel.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Mengganti nama kolom "NewCol" dengan "NewColumn" dalam tabel, dan mengabaikan jika kolom tidak ada.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
