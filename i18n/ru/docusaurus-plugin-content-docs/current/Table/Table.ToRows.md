---
title: Table.ToRows
---

# Table.ToRows


## Description

Создает список вложенных списков значений строки из таблицы.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Создает список вложенных списков из таблицы <code>table</code>.  Каждый элемент списка является внутренним списком, содержащим значения строки.


## Examples

### Example #1 
Создание списка значений строк из таблицы.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
