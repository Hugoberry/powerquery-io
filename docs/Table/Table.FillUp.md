---
title: Table.FillUp
---

# Table.FillUp


## Description

Propagates the value of a cell to the null-valued cells above in the column.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Returns a table from the <code>table</code> specified where the value of the next cell is propagated to the null-valued cells above in the <code>columns</code> specified.


## Examples

### Example #1 
Return a table with the null values in column [Column2] filled with the value below them from the table.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
