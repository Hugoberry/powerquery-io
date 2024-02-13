---
title: Record.FieldCount
---

# Record.FieldCount


Zwraca liczbę pól w rekordzie.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Zwraca liczbę pól w rekordzie <code>record</code>.


## Examples

### Example #1 
Znajdź liczbę pól w rekordzie.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
