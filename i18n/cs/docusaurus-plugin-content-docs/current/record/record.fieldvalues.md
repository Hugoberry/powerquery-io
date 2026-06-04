---
title: Record.FieldValues
---

# Record.FieldValues


Vrátí seznam hodnot polí.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Vrátí seznam hodnot polí záznamu `record`.


## Examples

### Example #1
Vrátí hodnoty polí záznamu.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
