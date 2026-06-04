---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Повертає закриту версію заданого типу запису (або той самий тип, якщо його вже закрито).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Повертає закриту версію заданого запису `record` `type` (або той самий тип, якщо його вже закрито).


## Examples

### Example #1
Створіть закриту версію `type [ A = number,…]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
