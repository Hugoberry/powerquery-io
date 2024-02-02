---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Indicates whether the table contains only distinct rows (no duplicates).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Indicates whether the <code>table</code> contains only distinct rows (no duplicates). Returns <code>true</code> if the rows are distinct, <code>false</code> otherwise.    An optional parameter, <code>comparisonCriteria</code>, specifies which columns of the table are tested for duplication. If <code>comparisonCriteria</code> is not specified, all columns are tested.


## Examples

### Example #1 
Determine if the table is distinct.
```powerquery
Table.IsDistinct(
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
true
```


### Example #2 
Determine if the table is distinct in column.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
