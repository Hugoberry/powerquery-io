---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Видаляє вказані стовпці.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Вилучає вказані <code>columns</code> з наданої <code>table</code>.    За відсутності вказаного стовпця повертається помилка, якщо додатковий параметр <code>missingField</code> не визначає альтернативної поведінки (наприклад, <code>MissingField.UseNull</code> або <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Видалити з таблиці стовпець [Phone].
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
