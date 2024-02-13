---
title: Record.FieldCount
---

# Record.FieldCount


Kayıttaki alan sayısını döndürür.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

<code>record</code> kaydındaki alan sayısını döndürür.


## Examples

### Example #1 
Kayıttaki alan sayısını bulur.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
