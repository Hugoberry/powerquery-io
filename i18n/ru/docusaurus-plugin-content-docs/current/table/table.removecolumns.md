---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Удаляет указанные столбцы.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Удаляет указанный `columns` из предоставленной `table`. Когда указанный столбец не существует, возникает ошибка, если необязательным параметром `missingField` не задано альтернативное поведение (например, `MissingField.UseNull` или `MissingField.Ignore`).


## Examples

### Example #1
Удаление столбца \[Phone\] из таблицы.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2
Попробуйте удалить несуществующий столбец из таблицы.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
