---
title: Number.RoundUp
---

# Number.RoundUp


Retourne le nombre supérieur suivant. Le nombre de chiffres peut être spécifié.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Renvoie le résultat de l'arrondi <code>number</code> à l'entier supérieur suivant. Si <code>number</code> est null, cette fonction renvoie null.    Si <code>digits</code> est fourni, <code>number</code> est arrondi au nombre de chiffres décimaux spécifié.  


## Examples

### Example #1 
Arrondit au chiffre supérieur 1,234 à un entier.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Arrondit au chiffre supérieur 1,999 à un entier.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Arrondit 1,234 au nombre supérieur à deux décimales.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
