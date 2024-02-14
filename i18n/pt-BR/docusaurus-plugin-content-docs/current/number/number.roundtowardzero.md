---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Retorna o resultado de arredondar números positivos para baixo e números negativos para cima. O número de dígitos pode ser especificado.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retorna o resultado do arredondamento de <code>number</code> com base no sinal do número. Essa função arrendondará números positivos para baixo e números negativos para cima.    Se <code>digits</code> for especificado, <code>number</code> será arredondado ao <code>digits</code> número de casas decimais.  


## Examples

### Example #1 
Arredonde o número -1,2 em direção a zero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Arredonde o número 1,2 em direção a zero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Arredondar o número -1,234 para duas casas decimais após o zero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
