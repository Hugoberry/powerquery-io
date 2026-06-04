---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Menghapus kolom yang ditetapkan.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Menghapus `columns` yang ditentukan dari `table` yang disediakan. Jika kolom yang ditentukan tidak ada, kesalahan akan muncul kecuali parameter opsional `missingField` menentukan perilaku alternatif (misalnya, `MissingField.UseNull` atau `MissingField.Ignore`).


## Examples

### Example #1
Menghapus kolom \[Phone\] dari tabel.
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
