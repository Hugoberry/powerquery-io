---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Replaces the error values in the specified columns with the corresponding specified value.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Replaces the error values in the specified columns of the `table` with the new values in the `errorReplacement` list. The format of the list is \{\{column1, value1\}, ...\}. There may only be one replacement value per column, specifying the column more than once will result in an error.


## Examples

### Example #1
Replace the error value with the text "world" in the table.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Replace the error value in column A with the text "hello" and in column B with the text "world" in the table.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
