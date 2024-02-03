---
title: Value.Is
---

# Value.Is


## Description

Conclúe se un valor é compatible co tipo especificado.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Conclúe se un valor é compatible co tipo especificado. Isto equivale ao operador “is” en M, coa excepción de que pode aceptar referencias de tipo de identificador como Number.Type.


## Examples

### Example #1 
Compara dúas maneiras de concluír se un número é compatible co número de tipo.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
