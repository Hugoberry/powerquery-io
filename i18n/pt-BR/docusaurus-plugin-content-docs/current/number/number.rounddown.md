---
title: Number.RoundDown
---

# Number.RoundDown


Retorna o número mais alto anterior. O número de dígitos pode ser especificado.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Retorna o resultado do arredondamento `number` para baixo para o número inteiro mais alto anterior. Se `number` for nulo, esta função retornará nulo. Se `digits` for fornecido, `number` será arredondado para o número especificado de dígitos decimais.


## Examples

### Example #1
Arredonde 1,234 para baixo, de modo que se torne um número inteiro.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Arredonde 1,999 para baixo, de modo que se torne um número inteiro.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Arredondar 1,999 para duas casas decimais.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
