---
title: Table.Repeat
---

# Table.Repeat


Repeats the rows of the tables a specified number of times.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Returns a table with the rows from the input <code>table</code> repeated the specified <code>count</code> times.


## Examples

### Example #1 
Repeat the rows in the table two times.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
