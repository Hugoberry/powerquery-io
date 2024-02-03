---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Retorna o próximo número mais alto. O número de dígitos pode ser especificado.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Retorna o resultado do arredondamento <code>number</code> para o próximo inteiro mais alto. Se <code>number</code> for nulo, esta função retornará nulo.    Se <code>digits</code> for fornecido, <code>number</code> será arredondado para o número especificado de dígitos decimais.  


## Examples

### Example #1 
Arredonde 1,234 para cima, de modo que se torne um número inteiro.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Arredonde 1,999 para cima, de modo que se torne um número inteiro.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Arredondar 1,234 para duas casas decimais.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
