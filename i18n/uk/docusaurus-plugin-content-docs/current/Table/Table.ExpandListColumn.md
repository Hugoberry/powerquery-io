---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

Маючи стовпець списків у таблиці, створити копію рядка для кожного значення у списку.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

Маючи <code>table</code>, де <code>column</code> — це список значень, розділяє список на рядки для кожного значення. Значення в інших стовпцях дублюються в кожний новий рядок, що створюється.


## Examples

### Example #1 
Розділити стовпець списку [Name] у таблиці.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
