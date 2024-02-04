---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Devolve o número anterior mais alto. Pode ser especificado o número de dígitos.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Devolve o resultado do arredondamento de <code>number</code> por defeito para o número inteiro mais alto anterior. Se <code>number</code> for nulo, esta função devolve nulo.    Se <code>digits</code> for fornecido, <code>number</code> é arredondado para o número especificado de dígitos decimais.  


## Examples

### Example #1 
Arredondar 1,234 por defeito para um número inteiro.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arredondar 1,999 por defeito para um número inteiro.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Arredondar por defeito 1,999 para duas casas decimais.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
