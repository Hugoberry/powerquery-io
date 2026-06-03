---
title: Number.RoundUp
---

# Number.RoundUp


Devolve o maior número inteiro seguinte. Pode ser especificado o número de dígitos.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Devolve o resultado do arredondamento de `number`por excesso para o número inteiro mais alto seguinte. Se `number` for nulo, esta função devolve nulo. Se `digits` for fornecido, `number` é arredondado para o número especificado de dígitos decimais.


## Examples

### Example #1
Arredondar 1,234 por excesso para um número inteiro.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Arredondar 1,999 por excesso para um número inteiro.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Arredondar por excesso 1,234 para duas casas decimais.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
