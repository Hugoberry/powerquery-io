---
title: Record.FromTable
---

# Record.FromTable


\{\[Name = name, Value = value\]\} түріндегі кестеден жазбаны жасайды.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Өріс атауларын және мән атауларын `` `table` `` қамтитын \{\[Name = name, Value = value\]\} жазбалар кестесінен жазбаны қайтарады. Өріс атаулары бірегей болмаса, қате туады.


## Examples

### Example #1
Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}) формасының кестесінен жазба жасау.
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
