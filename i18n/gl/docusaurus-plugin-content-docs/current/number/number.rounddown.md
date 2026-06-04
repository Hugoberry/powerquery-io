---
title: Number.RoundDown
---

# Number.RoundDown


Devolve o número maior anterior. Pode especificarse o número de díxitos.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Devolve o resultado de arredondar `number` para abaixo ata o enteiro maior anterior. Se `number` é nulo, esta función devolve nulo. Se se especifica `digits`, `number`arredóndase ao número de díxitos decimais especificado.


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
