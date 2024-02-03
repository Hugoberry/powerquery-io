---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Alan değerlerinin listesini döndürür.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

<code>record</code> kaydındaki alan değerlerinin listesini döndürür.


## Examples

### Example #1 
Kayıttaki alan değerlerini bulur.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
