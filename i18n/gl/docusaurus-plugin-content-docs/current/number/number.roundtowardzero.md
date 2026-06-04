---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Devolve o resultado de arredondar os números positivos para abaixo e os números negativos para arriba. Pode especificarse o número de díxitos.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Devolve o resultado de arredondar `number` baseándose no signo do número. Esta función arredondará os números positivos para abaixo e os números negativos para arriba. Se se especifica `digits`, `number` arredóndase ao número `digits` de díxitos decimais.


## Examples

### Example #1
Arredondar o número -1,2 cara a cero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Arredondar o número -1,2 cara a cero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Arredondar o número -1,234 a dous decimais cara cero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
