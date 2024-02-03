---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Повертає кількість полів у записі.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Повертає кількість полів у записі <code>record</code>.


## Examples

### Example #1 
Знайти кількість полів у записі.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
