---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Retorna un número que indica el nombre mínim de paràmetres necessaris per invocar el tipus de funció.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Retorna un número que indica el nombre mínim de paràmetres necessaris per invocar `type` d'entrada de la funció.


## Examples

### Example #1
Cerqueu el nombre de paràmetres necessaris per a la funció `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
