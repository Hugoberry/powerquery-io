---
title: Record.FromTable
---

# Record.FromTable


Crea un record da una tabella nel formato \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Restituisce un record da una tabella di record <code>table</code> contenenti i nomi di campi e i nomi di valori <code>\{[Name = name, Value = value]}</code>. Se i nomi di campi non sono univoci, viene generata un'eccezione.


## Examples

### Example #1 
Creare un record dalla tabella nel formato Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
