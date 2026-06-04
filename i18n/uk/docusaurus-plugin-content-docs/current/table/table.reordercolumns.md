---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Повертає таблицю зі стовпцями в указаному порядку.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Повертає таблицю із вхідного елемента `table` зі стовпцями в порядку, зазначеному `columnOrder`. Порядок не вказаних у списку стовпців не змінюватиметься. У разі відсутності стовпця стається помилка, якщо додатковий параметр `missingField` не визначає інше (наприклад, `MissingField.UseNull` або `MissingField.Ignore`).


## Examples

### Example #1
Змінити в таблиці порядок стовпців \[Phone\] і \[Name\].
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
Змінити в таблиці порядок стовпців \[Phone\] і \[Address\] або використати функцію "MissingField.Ignore". Таблиця не змінюється, бо стовпця \[Address\] не існує.
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
