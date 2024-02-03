---
title: Value.Is
---

# Value.Is


## Description

Determina si un valor és compatible amb el tipus especificat.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Determina si un valor és compatible amb el tipus especificat. Això equival a l'operador "is" de M, amb l'excepció que pot acceptar referències de tipus d'identificador, com ara Number.Type.


## Examples

### Example #1 
Compareu dues maneres de determinar si un nombre és compatible amb el tipus nombre.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
