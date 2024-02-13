---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Возвращает таблицу, содержащую только те строки входной таблицы, которые содержат ошибку по крайней мере в одной из ячеек. Если указан список столбцов, на наличие ошибок проверяются только ячейки в указанных столбцах.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Возвращает таблицу, содержащую только те строки входной таблицы, которые содержат ошибку по крайней мере в одной из ячеек. Если указан список столбцов, на наличие ошибок проверяются только ячейки в указанных столбцах.


## Examples

### Example #1 
Выбрать имена клиентов, в строках которых есть ошибки.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
