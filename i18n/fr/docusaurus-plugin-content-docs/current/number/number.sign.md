---
title: Number.Sign
---

# Number.Sign


Retourne 1 si le nombre est positif, -1 s&#39;il est négatif, et 0 s&#39;il est zéro.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Retourne 1 si <code>number</code> est un nombre est positif, -1 s'il est négatif, et 0 s'il est zéro.    Si <code>number</code> a la valeur null, <code>Number.Sign</code> retourne null.


## Examples

### Example #1 
Détermine le signe de 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Détermine le signe de -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Détermine le signe de 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
