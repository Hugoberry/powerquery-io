---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Retorna el nombre següent més alt. El nombre de dígits es pot especificar.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Retorna el resultat d'arrodonir <code>number</code> a l'alça fins al següent enter més alt. Si <code>number</code> és nul, aquesta funció retorna un valor nul.    Si es proporciona <code>digits</code>, <code>number</code> s'arrodoneix al número especificat de dígits decimals.  


## Examples

### Example #1 
Arrodoneix cap amunt 1,234 a un enter.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Arrodoneix cap amunt 1,999 a un enter.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Arrodoneix cap amunt 1,234 a dues posicions decimals.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
