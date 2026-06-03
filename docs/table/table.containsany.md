---
title: Table.ContainsAny
---

# Table.ContainsAny


Indicates whether any of the specified records appear as rows in the table.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indicates whether any the specified records in the list of records `rows`, appear as rows in the `table`. An optional parameter `equationCriteria` may be specified to control comparison between the rows of the table.


## Examples

### Example #1
Determine if the table `({[a = 1, b = 2], [a = 3, b = 4]})` contains the rows `[a = 1, b = 2]` or `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Determine if the table `({[a = 1, b = 2], [a = 3, b = 4]})` contains the rows `[a = 1, b = 3]` or `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Determine if the table `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` contains the rows `[a = 1, b = 3]` or `[a = 3, b = 5]` comparing only the column \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
