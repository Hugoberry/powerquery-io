---
title: Record.FromTable
---

# Record.FromTable


Mencipta rekod daripada jadual bagi bentuk \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Mengembalikan rekod daripada jadual rekod `table` yang mengandungi nama medan dan nama nilai `{[Name = name, Value = value]}`. Ralat akan dipaparkan jika nama medan tidak unik.


## Examples

### Example #1
Cipta rekod daripada jadual bagi bentuk (\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
