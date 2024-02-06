---
title: Record.FromTable
---

# Record.FromTable


Opretter en post ud fra en tabel i formatet \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Returnerer en post fra en tabel med poster <code>table</code>, der indeholder feltnavne og værdinavne <code>\{[Name = name, Value = value]}</code>. Der udløses en undtagelse, hvis feltnavnene ikke er entydige.


## Examples

### Example #1 
Opret en post ud fra tabellen i formen Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
