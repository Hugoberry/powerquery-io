---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Mengalih keluar lajur yang ditentukan.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Mengalih keluar <code>columns</code> daripada <code>table</code> yang diberikan.    Jika lajur yang ditentukan tidak wujud, ralat dibangkitkan melainkan parameter pilihan <code>missingField</code> menentukan tingkah laku alternatif (contohnya, <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Alih keluarkan lajur [Phone] daripada jadual.
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
Cuba alih keluar lajur yang tidak wujud daripada jadual.
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
