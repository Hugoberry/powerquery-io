---
title: Record.FieldCount
---

# Record.FieldCount


Vrátí počet polí záznamu.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Vrátí počet polí záznamu `record`.


## Examples

### Example #1
Vrátí počet polí záznamu.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
