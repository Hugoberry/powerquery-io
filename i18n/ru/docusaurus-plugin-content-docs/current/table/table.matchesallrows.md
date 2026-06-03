---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Указывает, все строки ли в таблице соответствуют заданному условию.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Указывает, все ли строки в `table` соответствуют заданному `condition`. Возвращает `true`, если все строки соответствуют условию, `false` - в противном случае.


## Examples

### Example #1
Определение, все ли значения строк в столбце \[a\] в таблице являются четными.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Определить, все ли значения строк равны \[a = 1, b = 2\], в таблице `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
