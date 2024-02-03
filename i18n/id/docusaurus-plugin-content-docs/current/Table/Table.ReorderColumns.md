---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Menghasilkan tabel dengan kolom dalam susunan tertentu.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Menghasilkan tabel dari input <code>table</code>, dengan kolom dalam susunan yang ditentukan oleh <code>columnOrder</code>. Kolom yang tidak ditetapkan dalam daftar tidak akan disusun ulang.     Jika kolom tidak ada, pengecualian akan dibuat, kecuali jika parameter opsional <code>missingField</code> menetapkan alternatif (misalnya, <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Menukar susunan kolom [Phone] dan [Name] dalam tabel.
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
Menukar susunan kolom [Phone] dan [Address] atau menggunakan &#34;MissingField.Ignore&#34; dalam tabel. Hal ini tidak mengubah tabel karena kolom [Address] tidak ada.
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
