---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Кестедегі бір жолды қайтарады.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Бір жолдың <code>table</code> ішіндегі бір жолды қайтарады. Егер <code>table</code> бірнеше жолы болса, қиыс жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
Кестедегі бір жолды қайтару.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
