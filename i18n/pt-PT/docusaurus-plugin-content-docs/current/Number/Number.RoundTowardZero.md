---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Devolve o resultado do arredondamento de números positivos por defeito e de números negativos por excesso. Pode ser especificado o número de dígitos.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Devolve o resultado do arredondamento de <code>number</code> com base no sinal do número. Esta função arredonda números positivos por defeito e números negativos por excesso. Se <code>digits</code> for especificado, <code>number</code> é arrendondado para o número de dígitos decimais <code>digits</code>.    


## Examples

### Example #1 
Arredondar o número -1,2 na direção de zero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Arredondar o número 1,2 na direção de zero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Arredondar o número -1,234 para duas casas decimais até ao zero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
