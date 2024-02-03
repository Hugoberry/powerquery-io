---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Створює список із вкладених списків значень стовпців з таблиці.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Створює список із вкладених списків з таблиці, <code>table</code>.  Кожний елемент списку є внутрішнім списком, що містить значення стовпців.


## Examples

### Example #1 
Створити список значень стовпців із таблиці.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
