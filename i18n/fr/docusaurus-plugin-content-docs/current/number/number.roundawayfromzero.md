---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Retourne le résultat de l'arrondi supérieur pour les nombres positifs et de l'arrondi inférieur pour les nombres négatifs. Le nombre de chiffres peut être spécifié.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retourne le résultat de l'arrondi de `number` en fonction du signe du nombre. Cette fonction arrondit les nombres positifs au chiffre supérieur et les nombres négatifs au chiffre inférieur. Si `digits` est spécifié, `number` est arrondi à `digits` chiffres décimaux.


## Examples

### Example #1
Arrondit le nombre -1,2 à l'opposé de zéro.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
Arrondit le nombre 1,2 à l'opposé de zéro.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
Arrondit le nombre -1,234 à deux décimales en s'éloignant de zéro.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
