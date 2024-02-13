---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Devolve o resultado do arredondamento de números positivos por excesso e de números negativos por defeito.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Devolve o resultado do arredondamento de <code>number</code> com base no sinal do número. Esta função arredonda números positivos por excesso e números negativos por defeito.    Se <code>digits</code> for especificado, <code>number</code> é arrendondado para o número de dígitos decimais <code>digits</code>.    


## Examples

### Example #1 
Arredondar o número -1,2 na direção oposta ao zero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Arredondar o número 1,2 na direção oposta ao zero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Arredondar o número -1,234 para duas casas decimais a partir do zero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
