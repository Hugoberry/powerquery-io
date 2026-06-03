---
title: Record.FromTable
---

# Record.FromTable


Создает запись из таблицы в форме \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Возвращает запись из таблицы записей `table`, которая содержит имена полей и имена значений `{[Name = name, Value = value]}`. Если имена полей не уникальны, генерируется ошибка.


## Examples

### Example #1
Создание записи из таблицы формы Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
