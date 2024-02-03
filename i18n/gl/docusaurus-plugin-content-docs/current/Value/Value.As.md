---
title: Value.As
---

# Value.As


## Description

Devolve o valor se é compatible co tipo especificado.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Devolve o valor se é compatible co tipo especificado. Isto equivale ao operador “as” en M, coa excepción de que pode aceptar referencias de tipo de identificador como Number.Type.


## Examples

### Example #1 
Converter un número nun número.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Intento de converter un valor de texto nun número.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
