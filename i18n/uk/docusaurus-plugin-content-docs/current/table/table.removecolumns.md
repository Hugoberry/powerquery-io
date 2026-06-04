---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Видаляє вказані стовпці.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Вилучає вказані `columns` з наданої `table`. За відсутності вказаного стовпця повертається помилка, якщо додатковий параметр `missingField` не визначає альтернативної поведінки (наприклад, `MissingField.UseNull` або `MissingField.Ignore`).


## Examples

### Example #1
Видалити з таблиці стовпець \[Phone\].
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
Спробуйте вилучити з таблиці стовпець, який не існує.
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
