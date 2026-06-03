---
title: Type.ForFunction
---

# Type.ForFunction


Retourne un type qui représente les fonctions avec les contraintes de paramètre et de type de retour spécifiques.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Crée un `function type` à partir de `signature`, un enregistrement de `ReturnType` et `Parameters`, et `min`, le nombre minimum d'arguments requis pour appeler la fonction.


## Examples

### Example #1
Crée le type d'une fonction qui accepte un paramètre de nombre nommé X et retourne un nombre.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
