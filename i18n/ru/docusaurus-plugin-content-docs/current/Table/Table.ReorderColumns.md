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

Возвращает таблицу из входных данных <code>table</code> со столбцами в порядке, указанном в <code>columnOrder</code>. Порядок столбцов, не включенных в список, не будет изменен.     Для несуществующего столбца возникает исключение, если необязательный параметр <code>missingField</code> не указывает дополнительное действие (например, <code>MissingField.UseNull</code> или <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Смена местами столбцов [Phone] и [Name] в таблице.
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
Смена местами столбцов [Phone] и [Address] или использование MissingField.Ignore в таблице. Таблица не будет изменена, поскольку столбца [Address] не существует.
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
