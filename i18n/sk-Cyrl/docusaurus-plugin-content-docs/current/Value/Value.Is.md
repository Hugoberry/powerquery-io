---
title: Value.Is
---

# Value.Is


## Description

Určuje, či je hodnota kompatibilná so zadaným typom.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Určuje, či je hodnota kompatibilná so zadaným typom. Je to ekvivalent operátora is v jazyku M s výnimkou, že môže prijať odkazy na typ identifikátora, ako napríklad Number.Type.


## Examples

### Example #1 
Porovnanie dvoch spôsobov určenia, či je číslo kompatibilné s typom number.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
