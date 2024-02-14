---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Sütunların, belirtilen türlerle eşleşen adlarıyla bir liste döndürür.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

<code>listOfTypes</code> içinde belirtilen türlerle eşleşen <code>table</code> tablosunadki sütunların adlarıyla bir liste döndürür.


## Examples

### Example #1 
Tabloda yer alan Number.Type türündeki sütun adlarını döndürür.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
