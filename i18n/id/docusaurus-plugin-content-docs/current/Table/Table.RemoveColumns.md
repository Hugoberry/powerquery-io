---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Menghapus kolom yang ditetapkan.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Menghapus <code>columns</code> yang ditentukan dari <code>table</code> yang disediakan. 
Jika kolom yang ditentukan tidak ada, kesalahan akan muncul kecuali parameter opsional <code>missingField</code> menentukan perilaku alternatif (misalnya, <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Menghapus kolom [Phone] dari tabel.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Coba hapus kolom yang tidak ada dari tabel.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
