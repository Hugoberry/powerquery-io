---
title: Value.Is
---

# Value.Is


## Description

Određuje da li je vrednost kompatibilna sa određenim tipom.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Određuje da li je vrednost kompatibilna sa određenim tipom. Ovo je jednako "is" operatoru u M, sa izuzetkom da može da prihvati reference tipa identifikatora kao što je Number.Type.


## Examples

### Example #1 
Uporedite na dva načina da li je broj kompatibilan sa tipom broja.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
