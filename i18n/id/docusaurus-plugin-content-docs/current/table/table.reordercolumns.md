---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Menghasilkan tabel dengan kolom dalam susunan tertentu.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Menghasilkan tabel dari input `table`, dengan kolom dalam susunan yang ditentukan oleh `columnOrder`. Kolom yang tidak ditetapkan dalam daftar tidak akan disusun ulang. Jika kolom tidak ada, kesalahan akan muncul kecuali parameter opsional `missingField` menentukan alternatif (misalnya `MissingField.UseNull` atau `MissingField.Ignore`).


## Examples

### Example #1
Menukar susunan kolom \[Phone\] dan \[Name\] dalam tabel.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Menukar susunan kolom \[Phone\] dan \[Address\] atau menggunakan "MissingField.Ignore" dalam tabel. Hal ini tidak mengubah tabel karena kolom \[Address\] tidak ada.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
