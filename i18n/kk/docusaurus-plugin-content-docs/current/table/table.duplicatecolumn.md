---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Көрсетілген атауы бар баған көшірмесін жасайды. Мәндер және түр бастапқы бағаннан көшіріледі.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

`columnName` кестесінде `table` атты бағанның көшірмесін жасау. `newColumnName` бағаны үшін мәндер және түр `columnName` бағанынан көшіріледі.


## Examples

### Example #1
`({[a = 1, b = 2], [a = 3, b = 4]})` кестесіндегі "көшірілген баған" деген бағанда "a" бағанының көшірмесін жасаңыз.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
