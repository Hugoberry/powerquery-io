---
title: Table.FillUp
---

# Table.FillUp


Распространяет значение ячейки в ячейки со значениями NULL выше в столбце.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Возвращает таблицу из указанного <code>table</code>, где значение следующей ячейки распространяется на ячейки со значением NULL выше в указанном <code>columns</code>.


## Examples

### Example #1 
Получение таблицы со значениями NULL в столбце [Column2], заполненном значениями, расположенными под ними в таблице.
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
