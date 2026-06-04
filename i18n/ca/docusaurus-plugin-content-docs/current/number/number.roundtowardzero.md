---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Retorna el resultat d'arrodonir els nombres positius cap avall i els nombres negatius cap amunt. El nombre de dígits es pot especificar.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retorna el resultat d'arrodonir `number` d'acord amb el signe del nombre. Aquesta funció arrodonirà els nombres positius cap avall i els nombres negatius cap amunt. Si s'especifica `digits`, `number` s'arrodoneix al nombre de dígits decimals `digits`.


## Examples

### Example #1
Arrodoneix el nombre -1,2 cap a zero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Arrodoneix el nombre 1,2 cap a zero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Arrodoneix el nombre -1,234 a dues posicions decimals cap a zero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
