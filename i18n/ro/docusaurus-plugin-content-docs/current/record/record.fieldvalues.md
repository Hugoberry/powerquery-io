---
title: Record.FieldValues
---

# Record.FieldValues


Returnează o listă de valori pentru câmp.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Returnează o listă de valori pentru câmp din înregistrarea `record`.


## Examples

### Example #1
Găsiți valorile pentru câmp din înregistrare.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
