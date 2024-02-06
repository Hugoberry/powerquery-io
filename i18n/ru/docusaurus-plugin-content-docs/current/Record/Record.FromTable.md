---
title: Record.FromTable
---

# Record.FromTable


Создает запись из таблицы в форме \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Возвращает запись из таблицы записей <code>table</code>, которая содержит имена полей и имена значений <code>\{[Name = name, Value = value]}</code>. Если имена полей неуникальны, вызывает исключение.


## Examples

### Example #1 
Создание записи из таблицы формы Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
