---
title: Record.FromTable
---

# Record.FromTable


## Description

Luo tietueen taulukosta muodossa \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Palauttaa tietueen tietuetaulukosta <code>table</code>, joka sisältää kenttien nimiä ja arvojen nimiä <code>\{[Name = name, Value = value]}</code>. Jos kenttien nimet eivät ole yksilöivät, tapahtuu poikkeus.


## Examples

### Example #1 
Luo tietueen taulukosta muodossa Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
