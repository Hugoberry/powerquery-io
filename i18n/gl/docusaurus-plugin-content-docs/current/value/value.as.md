---
title: Value.As
---

# Value.As


Devolve o valor se é compatible co tipo especificado.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Devolve o valor se é compatible co tipo especificado. Isto é equivalente ao operador "as" en M, coa excepción de que pode aceptar referencias de tipo identificador como Number.Type.


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
