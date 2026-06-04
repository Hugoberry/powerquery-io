---
title: Table.RenameColumns
---

# Table.RenameColumns


Menggunakan nama semula bentuk \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Melaksanakan nama semua yang ditentukan pada lajur dalam jadual `table`. Operasi penggantian `renames` terdiri daripada senarai dengan dua nilai, nama lajur lama dan nama lajur baharu, diberikan dalam senarai. Jika lajur tidak wujud, ralat akan dipaparkan melainkan parameter pilihan `missingField` menentukan alternatif (cth. `MissingField.UseNull` atau `MissingField.Ignore`).


## Examples

### Example #1
Gantikan nama lajur "CustomerNum" dengan "CustomerID" dalam jadual.
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
Gantikan nama lajur "CustomerNum" dengan "CustomerID" dan "PhoneNum" dengan "Phone" dalam jadual.
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
Gantikan nama lajur "NewCol" dengan "NewColumn" dalam jadual dan abaikan jika lajur itu tidak wujud.
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
