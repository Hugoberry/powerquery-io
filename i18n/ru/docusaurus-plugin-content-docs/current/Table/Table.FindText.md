---
title: Table.FindText
---

# Table.FindText


Возвращает все строки в таблице, содержащие заданный текст.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Возвращает строки из таблицы <code>table</code> с текстом <code>text</code>. Если текст не найден, то возвращается пустая таблица.


## Examples

### Example #1 
Нахождение в таблице строк, содержащих Bob.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
