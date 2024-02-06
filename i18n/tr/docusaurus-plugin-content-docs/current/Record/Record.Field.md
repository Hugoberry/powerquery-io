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

<code>record</code> içindeki belirtilen <code>field</code> öğesinin değerini döndürür. Alan bulunmazsa, özel durum oluşur.


## Examples

### Example #1 
Kayıtta &#34;CustomerID&#34; alanına ilişkin değeri bulur.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
