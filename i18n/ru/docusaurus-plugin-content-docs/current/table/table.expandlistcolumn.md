---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Получив исходный столбец списков в таблице, создать копию строки для каждого значения в списке.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Получив <code>table</code>, где <code>column</code> - список значений, разделить список построчно для каждого значения. Значения в других столбцах повторяются в каждой вновь созданной строке.


## Examples

### Example #1 
Разделение столбца списка [Name] в таблице.
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
