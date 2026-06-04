---
title: Record.FieldValues
---

# Record.FieldValues


Mengembalikan senarai nilai medan.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Mengembalikan senarai nilai medan dalam rekod `record`.


## Examples

### Example #1
Cari nilai medan dalam rekod.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
