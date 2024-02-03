---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Devolve o resultado de arredondar os números positivos para arriba e os números negativos para abaixo. O número de díxitos pode especificarse.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Devolve o resultado de arredondar <code>number</code> baseándose no signo do número. Esta función arredondará os números positivos para arriba e os números negativos para abaixo.    Se se especifica <code>digits</code>, <code>number</code> arredóndase ao número <code>digits</code> de díxitos decimais.  


## Examples

### Example #1 
Arredondar o número -1,2 lonxe de cero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Arredondar o número 1,2 lonxe de cero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Arredondar o número -1,234 a dous decimais lonxe de cero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
