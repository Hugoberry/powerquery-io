---
title: Table.Column
---

# Table.Column


तालिका से डेटा का एक निर्दिष्ट स्तंभ, सूची के रूप में लौटाता है.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

तालिका <code>table</code> से <code>column</code> द्वारा निर्दिष्ट डेटा का स्तंभ, सूची के रूप में लौटाता है.


## Examples

### Example #1 
तालिका में [Name] स्तंभ से मान लौटाता है.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
