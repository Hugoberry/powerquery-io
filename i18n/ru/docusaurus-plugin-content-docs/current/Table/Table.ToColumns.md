---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Создает список вложенных списков значений столбца из таблицы.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Создает список вложенных списков из таблицы <code>table</code>.  Каждый элемент списка является внутренним списком, содержащим значения столбца.


## Examples

### Example #1 
Создание списка значений столбца из таблицы.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
