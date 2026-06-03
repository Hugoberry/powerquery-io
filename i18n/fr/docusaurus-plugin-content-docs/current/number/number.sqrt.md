---
title: Number.Sqrt
---

# Number.Sqrt


Retourne la racine carrée du nombre.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Retourne la racine carrée de `number`. Si `number` a la valeur null, `Number.Sqrt` retourne null. Si c'est une valeur négative, `Number.NaN` est retourné (Not a number).


## Examples

### Example #1
Recherche la racine carrée de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Recherche la racine carrée de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
