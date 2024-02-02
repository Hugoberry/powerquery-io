---
title: Record.FromTable
---

# Record.FromTable


## Description

Crée un enregistrement à partir d&#39;une table au format \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Retourne un enregistrement à partir d'une table d'enregistrements <code>table</code> contenant les noms des champs et les noms des valeurs <code>\{[Name = name, Value = value]}</code>. Si les noms des champs ne sont pas uniques, une exception est levée.


## Examples

### Example #1 
Crée un enregistrement à partir de la table, de la forme Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
