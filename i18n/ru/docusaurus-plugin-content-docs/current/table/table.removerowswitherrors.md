---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Возвращает таблицу со строками, удаленными из входной таблицы и содержащими ошибку по крайней мере в одной из ячеек. Если указан список столбцов, на наличие ошибок проверяются только ячейки в указанных столбцах.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Возвращает таблицу со строками, удаленными из входной таблицы и содержащими ошибку по крайней мере в одной из ячеек. Если указан список столбцов, на наличие ошибок проверяются только ячейки в указанных столбцах.


## Examples

### Example #1 
Удалить ошибочное значение из первой строки.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
