---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Retorna o resultado de números positivos de arrendondamento para cima e de números negativos para baixo. O número de dígitos pode ser especificado.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retorna o resultado do arredondamento de <code>number</code> com base no sinal do número. Essa função arrendondará números positivos para cima e números negativos para baixo.    Se <code>digits</code> for especificado, <code>number</code> será arredondado ao <code>digits</code> número de casas decimais.  


## Examples

### Example #1 
Arredonde o número -1,2 em direção oposta a zero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Arredonde o número 1,2 em direção oposta a zero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Arredonda o número -1,234 em duas casas decimais após o zero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
