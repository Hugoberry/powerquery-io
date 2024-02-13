---
title: Value.Is
---

# Value.Is


Determina si un valor es compatible con el tipo especificado.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

Determina si un valor es compatible con el tipo especificado. Esto es equivalente al operador "is" en M, con la excepción de que puede aceptar referencias de tipo de identificador como Number.Type.


## Examples

### Example #1 
Compare dos maneras de determinar si un número es compatible con el tipo número.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
