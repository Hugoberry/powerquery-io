---
title: Record.FieldCount
---

# Record.FieldCount


Mengembalikan bilangan medan dalam rekod.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Mengembalikan bilangan medan dalam rekod `record`.


## Examples

### Example #1
Cari bilangan medan dalam rekod.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
