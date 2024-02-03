---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Повертає таблицю лише з тими рядками вхідної таблиці, які містять помилку у принаймні одній клітинці. Якщо список стовпців задано, на наявність помилок перевіряються лише клітинки у зазначених стовпцях.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Повертає таблицю лише з тими рядками вхідної таблиці, які містять помилку у принаймні одній клітинці. Якщо список стовпців задано, на наявність помилок перевіряються лише клітинки у зазначених стовпцях.


## Examples

### Example #1 
Виділити імена клієнтів із помилками у відповідних рядках.
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
