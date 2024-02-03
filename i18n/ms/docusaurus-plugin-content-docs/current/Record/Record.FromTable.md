---
title: Record.FromTable
---

# Record.FromTable


## Description

Mencipta rekod daripada jadual bagi bentuk \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Mengembalikan rekod daripada jadual rekod <code>table</code> yang mengandungi nama medan dan nama nilai <code>\{[Name = name, Value = value]}</code>. Pengecualian dikembalikan jika nama medan bukan unik.


## Examples

### Example #1 
Cipta rekod daripada jadual bagi bentuk (\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
