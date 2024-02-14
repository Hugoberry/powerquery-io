---
title: Record.FromTable
---

# Record.FromTable


Maakt een record van een tabel in de notatie \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Retourneert een record van een tabel met records <code>table</code> die veld- en waardenamen <code>\{[Name = name, Value = value]}</code> bevatten. Er wordt een uitzondering gegenereerd als de veldnamen niet uniek zijn.


## Examples

### Example #1 
Een record van de tabel in de notatie Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) maken.
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
