---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Devolve o número maior anterior. Pode especificarse o número de díxitos.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Devolve o resultado de arredondar <code>number</code> para abaixo ata o enteiro maior anterior. Se <code>number</code> é nulo, esta función devolve nulo.    Se se especifica <code>digits</code>, <code>number</code>arredóndase ao número de díxitos decimais especificado.  


## Examples

### Example #1 
Arredondar 1,234 para abaixo ao enteiro.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arredondar 1,999 para abaixo ao enteiro.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Arredondar 1,999 para abaixo a dous decimais.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
