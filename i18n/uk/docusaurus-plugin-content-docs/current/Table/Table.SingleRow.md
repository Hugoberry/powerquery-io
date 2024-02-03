---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Повертає єдиний рядок у таблицю.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Повертає єдиний рядок у рядок <code>table</code>. Якщо <code>table</code> містить більше одного рядка, повертається виняткова ситуація.


## Examples

### Example #1 
Знайти один рядок у таблиці.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
