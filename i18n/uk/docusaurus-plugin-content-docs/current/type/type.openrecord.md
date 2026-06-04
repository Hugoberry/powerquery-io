---
title: Type.OpenRecord
---

# Type.OpenRecord


Повертає відкриту версію заданого типу запису (або той самий тип, якщо його вже відкрито).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Повертає відкриту версію заданого запису `record` `type` (або той самий тип, якщо його вже відкрито).


## Examples

### Example #1
Створити відкриту версію `type [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
