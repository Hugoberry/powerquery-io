---
title: Record.FromTable
---

# Record.FromTable


## Description

Vytvorí záznam z tabuľky vo formáte \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Vráti záznam z tabuľky záznamov <code>table</code> obsahujúci názvy polí a názvy hodnôt <code>\{[Name = name, Value = value]}</code>. Ak názvy polí nie sú jedinečné, dôjde k výnimke.


## Examples

### Example #1 
Vytvorte záznam z tabuľky vo formáte Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
