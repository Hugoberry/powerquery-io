---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Повертає результат, чи запис відкрито.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Повертає значення `logical`, яке вказує, чи запис `type` відкрито.


## Examples

### Example #1
Визначити, чи запис `type [ A = number, ...]` відкрито.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
