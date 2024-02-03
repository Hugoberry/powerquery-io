---
title: Value.Is
---

# Value.Is


## Description

Určuje, zda je hodnota kompatibilní se zadaným typem.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Určuje, zda je hodnota kompatibilní se zadaným typem. Jedná se o ekvivalent operátoru is v M s výjimkou toho, že může přijímat odkazy na typ identifikátoru, třeba Number.Type.


## Examples

### Example #1 
Porovnejte dva způsoby, jak určit, zda je číslo kompatibilní s typem number.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
