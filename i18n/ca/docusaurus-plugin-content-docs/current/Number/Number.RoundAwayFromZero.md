---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Retorna el resultat d&#39;arrodonir els nombres positius cap amunt i els nombres negatius cap avall. El nombre de dígits es pot especificar.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Retorna el resultat d'arrodonir <code>number</code> d'acord amb el signe del nombre. Aquesta funció arrodonirà els nombres positius cap amunt i els nombres negatius cap avall.    Si s'especifica <code>digits</code>, <code>number</code> s'arrodoneix al nombre de dígits decimals <code>digits</code>.  


## Examples

### Example #1 
Arrodoneix el nombre -1,2 en direcció contrària a zero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Arrodoneix el nombre 1,2 en direcció contrària a zero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Arrodoneix el nombre -1,234 a dues posicions decimals en direcció contrària a zero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
