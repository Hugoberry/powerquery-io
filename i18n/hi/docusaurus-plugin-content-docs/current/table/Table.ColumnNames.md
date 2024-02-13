---
title: Table.ColumnNames
---

# Table.ColumnNames


स्तंभ नामों को एक सूची के रूप में लौटाता है.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

तालिका <code>table</code> में मौजूद स्तंभ नामों को पाठ की सूची के रूप में लौटाता है.


## Examples

### Example #1 
तालिका के स्तंभ नाम ढूँढें.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
