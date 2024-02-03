---
title: Value.As
---

# Value.As


## Description

Vráti hodnotu, ak je kompatibilná so zadaným typom.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Vráti hodnotu, ak je kompatibilná so zadaným typom. Je to ekvivalent operátora as v jazyku M s výnimkou, že môže prijať odkazy na typ identifikátora, ako napríklad Number.Type.


## Examples

### Example #1 
Pretypovanie čísla na číslo.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Pokus o pretypovanie textovej hodnoty na číslo.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
