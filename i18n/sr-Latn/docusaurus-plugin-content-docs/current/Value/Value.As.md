---
title: Value.As
---

# Value.As


## Description

Vraća vrednost ako je kompatibilna sa određenim tipom.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Vraća vrednost ako je kompatibilna sa određenim tipom. Ovo je jednako "as" operatoru u M, sa izuzetkom da može da prihvati reference tipa identifikatora kao što je Number.Type.


## Examples

### Example #1 
Konvertuj broj u broj.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Pokušaj konvertovanja tekstualne vrednosti u broj.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
