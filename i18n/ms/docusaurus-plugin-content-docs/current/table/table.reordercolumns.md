---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Mengembalikan jadual dengan lajur dalam tertib yang ditentukan.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Mengembalikan jadual daripada input `table`, dengan lajur dalam tertib yang ditentukan oleh `columnOrder`. Lajur yang tidak ditentukan dalam senarai tidak akan disusun semula. Jika lajur tidak wujud, ralat akan dipaparkan melainkan parameter pilihan `missingField` menentukan alternatif (cth. `MissingField.UseNull` atau `MissingField.Ignore`).


## Examples

### Example #1
Tukar tertib lajur \[Phone\] dan \[Name\] dalam jadual.
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
Tukar tertib lajur \[Phone\] dan \[Address\] atau gunakan "MissingField.Ignore" dalam jadual. Ia tidak mengubah jadual kerana lajur \[Address\] tidak wujud.
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
