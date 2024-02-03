---
title: Table.ToRows
---

# Table.ToRows


## Description

Створює список із вкладених списків значень рядків з таблиці.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Створює список із вкладених списків з таблиці, <code>table</code>.  Кожний елемент списку є внутрішнім списком, що містить значення рядків.


## Examples

### Example #1 
Створити список значень рядків із таблиці.
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
