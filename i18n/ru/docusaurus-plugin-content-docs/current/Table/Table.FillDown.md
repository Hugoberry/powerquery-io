---
title: Table.FillDown
---

# Table.FillDown


## Description

Распространяет значение предыдущей ячейки в ячейки со значениями NULL ниже в столбце.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Возвращает таблицу из указанного <code>table</code>, где значение предыдущей ячейки распространяется на ячейки со значением NULL ниже в указанном <code>columns</code>.


## Examples

### Example #1 
Получение таблицы со значениями NULL в столбце [Place], заполненном значениями, расположенными над ними в таблице.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
