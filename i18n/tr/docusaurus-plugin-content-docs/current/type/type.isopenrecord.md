---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Bir kayıt türünün açık olup olmadığını döndürür.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Bir `type` kaydının açık olup olmadığı belirten bir `logical` değeri döndürür.


## Examples

### Example #1
Kaydın `type [ A = number, ...]` açık olup olmadığı belirlenir.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
