---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Retorna el nombre anterior més alt. El nombre de dígits es pot especificar.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Retorna el resultat d'arrodonir <code>number</code> a la baixa fins a l'enter més alt anterior. Si <code>number</code> és nul, aquesta funció retorna un valor nul.    Si es proporciona <code>digits</code>, <code>number</code> s'arrodoneix al número especificat de dígits decimals.  


## Examples

### Example #1 
Arrodoneix cap avall 1,234 a un enter.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arrodoneix cap avall 1,999 a un enter.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Arrodoneix cap avall 1,999 a dues posicions decimals.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
