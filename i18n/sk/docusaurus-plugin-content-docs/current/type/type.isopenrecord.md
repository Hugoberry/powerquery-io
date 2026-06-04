---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Vráti informácie o tom, či je typ záznamu otvorený.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Vráti `logickú hodnotu` označujúcu, či je záznam `type` otvorený.


## Examples

### Example #1
Zisti, či je záznam `typ [ A = číslo, ...]` otvorený.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
