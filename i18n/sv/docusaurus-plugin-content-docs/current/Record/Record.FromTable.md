---
title: Record.FromTable
---

# Record.FromTable


## Description

Skapar en post från en tabell i formatet \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Returnerar en post från en tabell med poster, <code>table</code>, som innehåller fältnamn och värdenamn, <code>\{[Name = name, Value = value]}</code>. Ett undantag genereras om fältnamnen inte är unika.


## Examples

### Example #1 
Skapa en post från tabellen i formatet Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
