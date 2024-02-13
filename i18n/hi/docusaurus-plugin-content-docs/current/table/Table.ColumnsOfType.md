---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


ऐसे स्तंभों के नामों वाली सूची लौटाता है जिनका मिलान निर्दिष्ट प्रकारों से होता है.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

तालिका <code>table</code> से ऐसे स्तंभ नामों वाली सूची लौटाता है जिनका मिलान <code>listOfTypes</code> में निर्दिष्ट प्रकारों से होता है.


## Examples

### Example #1 
तालिका से Number.Type प्रकार के स्तंभ के नाम लौटाएँ.
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
