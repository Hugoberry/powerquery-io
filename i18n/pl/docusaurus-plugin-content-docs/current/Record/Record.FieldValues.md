---
title: Record.FieldValues
---

# Record.FieldValues


Zwraca listę wartości pól.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Zwraca listę wartości pól w rekordzie <code>record</code>.


## Examples

### Example #1 
Znajdź wartości pól w rekordzie.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
