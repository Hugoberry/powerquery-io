---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Mengembalikan jadual dengan lajur dalam tertib yang ditentukan.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Mengembalikan lajur daripada input <code>table</code>, dengan lajur dalam tertib yang ditentukan oleh <code>columnOrder</code>. Lajur yang tidak ditentukan dalam senarai tidak akan disusun semula.     Jika lajur tidak wujud, pengecualian dikembalikan melainkan parameter pilihan <code>missingField</code> menentukan alternatif (cth. <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Tukar tertib lajur [Phone] dan [Name] dalam jadual.
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
Tukar tertib lajur [Phone] dan [Address] atau gunakan &#34;MissingField.Ignore&#34; dalam jadual. Ia tidak mengubah jadual kerana lajur [Address] tidak wujud.
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
