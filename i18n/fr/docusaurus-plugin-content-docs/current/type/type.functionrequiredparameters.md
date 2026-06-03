---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Retourne un nombre indiquant le nombre minimum de paramètres requis pour appeler le type de fonction.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Retourne un nombre indiquant le nombre minimum de paramètres requis pour appeler le `type` d'entrée de la fonction.


## Examples

### Example #1
Trouvez le nombre de paramètres requis de la fonction `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
