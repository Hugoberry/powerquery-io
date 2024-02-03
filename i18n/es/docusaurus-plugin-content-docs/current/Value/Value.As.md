---
title: Value.As
---

# Value.As


## Description

Devuelve el valor si es compatible con el tipo especificado.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Devuelve el valor si es compatible con el tipo especificado. Esto es equivalente al operador "as" en M, con la excepción de que puede aceptar referencias de tipo de identificador como Number.Type.


## Examples

### Example #1 
Convertir un número en un número.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Intento de convertir un valor de texto en un número.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
