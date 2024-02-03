---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Повертає список значень полів.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Повертає список значень полів у записі <code>record</code>.


## Examples

### Example #1 
Знайти значення полів у записі.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
