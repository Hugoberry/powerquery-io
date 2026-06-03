---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Bir kayıttaki belirtilen alanın değerini veya alan bulunamazsa varsayılan değeri döndürür.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

`record` kaydında `field` belirtilen alanının değerini döndürür. Alan bulunmazsa, isteğe bağlı `defaultValue` döndürülür.


## Examples

### Example #1
Kayıtta "Phone" alanına ilişkin değeri bulur veya bu değerin var olmaması halinde null döndürür.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Kayıtta "Phone" alanına ilişkin değeri bulur veya bu değerin var olmaması halinde varsayılan değeri döndürür.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
