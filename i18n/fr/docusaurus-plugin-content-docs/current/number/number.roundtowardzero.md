---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Retourne le résultat de l&#39;arrondi au chiffre inférieur pour les nombres positifs et de l&#39;arrondi au chiffre supérieur pour les nombres négatifs. Le nombre de chiffres peut être spécifié.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retourne le résultat de l'arrondi de <code>number</code> en fonction du signe du nombre. Cette fonction arrondit les nombres positifs au chiffre inférieur et les nombres négatifs au chiffre supérieur.     Si <code>digits</code> est spécifié, <code>number</code> est arrondi à <code>digits</code> chiffres décimaux.  


## Examples

### Example #1 
Arrondit le nombre -1,2 vers zéro.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Arrondit le nombre 1,2 vers zéro.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Arrondit le nombre -1,234 à deux décimales vers zéro.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
