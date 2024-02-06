---
title: Table.CombineColumns
---

# Table.CombineColumns


Combines the specified columns into a new column using the specified combiner function.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Remarks

Combines the specified columns into a new column using the specified combiner function.


## Examples

### Example #1 
Combine the last and first names into a new column, separated by a comma.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
