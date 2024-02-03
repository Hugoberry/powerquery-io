---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Retorna o número mais alto anterior. O número de dígitos pode ser especificado.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Retorna o resultado do arredondamento <code>number</code> para baixo para o número inteiro mais alto anterior. Se <code>number</code> for nulo, esta função retornará nulo.    Se <code>digits</code> for fornecido, <code>number</code> será arredondado para o número especificado de dígitos decimais.  


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
