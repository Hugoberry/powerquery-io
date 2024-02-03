---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Повертає таблицю зі стовпцями в указаному порядку.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Повертає таблицю із вхідного елемента <code>table</code> зі стовпцями в порядку, зазначеному <code>columnOrder</code>. Порядок не вказаних у списку стовпців не змінюватиметься.     У разі відсутності стовпця повертається виняткова ситуація, якщо додатковий параметр <code>missingField</code> не визначає інше (наприклад, <code>MissingField.UseNull</code> або <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Змінити в таблиці порядок стовпців [Phone] і [Name].
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
Змінити в таблиці порядок стовпців [Phone] і [Address] або використати функцію &#34;MissingField.Ignore&#34;. Таблиця не змінюється, бо стовпця [Address] не існує.
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
