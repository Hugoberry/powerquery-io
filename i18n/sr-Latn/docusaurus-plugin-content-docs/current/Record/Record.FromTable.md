---
title: Record.FromTable
---

# Record.FromTable


## Description

Kreira zapis od tabele u obliku \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Vraća zapis od tabele zapisa <code>table</code> koji sadrži imena polja i imena vrednosti <code>\{[Name = name, Value = value]}</code>. Ako imena polja nisu jedinstvena, vraća se izuzetak.


## Examples

### Example #1 
Kreiranje zapisa od tabele u obliku Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
