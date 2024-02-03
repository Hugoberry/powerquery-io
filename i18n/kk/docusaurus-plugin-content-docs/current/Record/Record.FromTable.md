---
title: Record.FromTable
---

# Record.FromTable


## Description

\{[Name = name, Value = value]} түріндегі кестеден жазбаны жасайды.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Өріс атауларын және мән атауларын <code>\{[Name = name, Value = value]}</code> қамтитын <code>table</code> жазбалар кестесінен жазбаны қайтарады. Өріс атаулары бірегей болмаса, қиыс жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}) формасының кестесінен жазба жасау.
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
