---
title: Record.FromTable
---

# Record.FromTable


Ustvari zapis iz tabele v obliki \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Vrne zapis iz tabele zapisov `table`, ki vsebuje imena polj in imena vrednosti `{[Name = name, Value = value]}`. Če imena polj niso enolična, pride do napake.


## Examples

### Example #1
Ustvarite zapis iz tabele v obliki Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
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
