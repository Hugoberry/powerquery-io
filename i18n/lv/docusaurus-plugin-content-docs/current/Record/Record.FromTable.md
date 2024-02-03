---
title: Record.FromTable
---

# Record.FromTable


## Description

Tiek izveidots ieraksts no šāda formāta tabulas: \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Tiek atgriezts ieraksts, kas ir izveidots no ierakstu tabulas <code>table</code>, kurā ir ietverti lauku nosaukumi un vērtības <code>\{[Name = name, Value = value]}</code>. Ja lauku nosaukumi nav unikāli, tiek aktivizēts izņēmums.


## Examples

### Example #1 
Izveidojiet ierakstu no šāda formāta tabulas: Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
