---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Menerapkan perubahan nama formulir \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Menjalankan perubahan nama tertentu ke kolom dalam tabel <code>table</code>. Operasi penggantian <code>renames</code> terdiri atas daftar dua nilai, yakni nama kolom lama dan baru, yang tersedia dalam daftar.    Jika kolom tidak ada, pengecualian akan dibuat, kecuali jika parameter opsional <code>missingField</code> menetapkan alternatif (misalnya, <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Mengganti nama kolom &#34;CustomerNum&#34; dengan &#34;CustomerID&#34; dalam tabel.
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
Mengganti nama kolom &#34;CustomerNum&#34; dengan &#34;CustomerID&#34; dan &#34;PhoneNum&#34; dengan &#34;Phone&#34; dalam tabel.
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
Mengganti nama kolom &#34;NewCol&#34; dengan &#34;NewColumn&#34; dalam tabel, dan mengabaikan jika kolom tidak ada.
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
