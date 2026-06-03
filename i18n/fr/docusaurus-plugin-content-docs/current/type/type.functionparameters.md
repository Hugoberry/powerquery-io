---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Retourne un enregistrement avec des valeurs de champ définies sur le nom des paramètres d'un type de fonction, et leurs valeurs définies sur les types correspondants.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Retourne un enregistrement avec des valeurs de champ définies sur le nom des paramètres de `type`, et leurs valeurs définies sur les types correspondants.


## Examples

### Example #1
Trouvez les types des paramètres de la fonction `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
