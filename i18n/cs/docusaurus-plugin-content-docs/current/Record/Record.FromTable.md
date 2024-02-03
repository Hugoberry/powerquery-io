---
title: Record.FromTable
---

# Record.FromTable


## Description

Vytvoří z tabulky záznam ve formátu \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Vrátí záznam z tabulky záznamů <code>table</code> obsahující názvy polí a názvy hodnot <code>\{[Name = name, Value = value]}</code>. Pokud nejsou názvy polí jedinečné, vrhne výjimku.


## Examples

### Example #1 
Vytvoří z tabulky záznam ve formátu Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
