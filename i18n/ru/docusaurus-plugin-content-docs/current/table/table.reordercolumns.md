---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Возвращает таблицу со столбцами в указанном порядке.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Возвращает таблицу из входных данных `table` со столбцами в порядке, указанном в `columnOrder`. Порядок столбцов, не включенных в список, не будет изменен. Если столбец не существует, генерируется ошибка, кроме случаев, когда необязательный параметр `missingField` задает иное действие (например, `MissingField.UseNull` или `MissingField.Ignore`).


## Examples

### Example #1
Смена местами столбцов \[Phone\] и \[Name\] в таблице.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Смена местами столбцов \[Phone\] и \[Address\] или использование MissingField.Ignore в таблице. Таблица не будет изменена, поскольку столбца \[Address\] не существует.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
