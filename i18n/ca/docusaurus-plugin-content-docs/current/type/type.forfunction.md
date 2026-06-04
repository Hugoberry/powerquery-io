---
title: Type.ForFunction
---

# Type.ForFunction


Retorna un tipus que representa les funcions amb restriccions específiques de paràmetre i tipus de retorn.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Crea `function type` de `signature`, un registre `ReturnType` i `Parameters`, i `min`, el nombre mínim d'arguments necessaris per invocar la funció.


## Examples

### Example #1
Crea el tipus per a una funció que pren un paràmetre de nombre anomenat X i en retorna un nombre.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
