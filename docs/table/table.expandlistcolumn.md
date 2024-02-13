---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Given a column of lists in a table, create a copy of a row for each value in its list.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Given a <code>table</code>, where a <code>column</code> is a list of values, splits the list into a row for each value. Values in the other columns are duplicated in each new row created.


## Examples

### Example #1 
Split the list column [Name] in the table.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
