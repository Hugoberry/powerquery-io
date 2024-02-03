---
title: Record.FromTable
---

# Record.FromTable


## Description

Creează o înregistrare dintr-un tabel de forma \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Returnează o înregistrare dintr-un tabel de înregistrări <code>table</code> ce conţine numele câmpurilor şi numele valorilor <code>\{[Name = name, Value = value]}</code>. Dacă numele câmpurilor nu sunt unice, apare o excepţie.


## Examples

### Example #1 
Creați o înregistrare din tabelul de forma Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
