---
title: Record.FromTable
---

# Record.FromTable


## Description

Ustvari zapis iz tabele v obliki \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Vrne zapis iz tabele zapisov <code>table</code>, ki vsebuje imena polj in imena vrednosti <code>\{[Name = name, Value = value]}</code>. Če imena polj niso enolična, pride do izjeme.


## Examples

### Example #1 
Ustvarite zapis iz tabele v obliki Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
