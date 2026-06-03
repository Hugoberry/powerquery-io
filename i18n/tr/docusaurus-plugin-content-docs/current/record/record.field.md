---
title: Record.Field
---

# Record.Field


Alanda belirtilen alanın değerini döndürür.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

`field` içindeki belirtilen `record` öğesinin değerini döndürür. Alan bulunamazsa, bir hata oluşur.


## Examples

### Example #1
Kayıtta "CustomerID" alanına ilişkin değeri bulur.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
